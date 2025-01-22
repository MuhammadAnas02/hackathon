"use client";
import React from "react";
import { useForm } from "react-hook-form";

interface Props {
  cart: { id: string; title: string; price: number; quantity: number }[];
  totalPrice: number;
  onClose: () => void;
}

export default function CheckoutForm({ cart, totalPrice, onClose }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data: any) => {
    const { name, email, phone, address, city, state, postalCode, paymentMethod } = data;

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          phone,
          address: `${address}, ${city}, ${state}, ${postalCode}`,
          paymentMethod,
          cart,
          totalPrice,
          status: "Pending",
        }),
        headers: { "Content-Type": "application/json" },
      });

      const result = await res.json();
      if (res.ok) {
        alert("Order placed successfully!");
        onClose();
      } else {
        console.error(result);
        alert("Failed to place order.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-4">
      {/* Name */}
      <label>Name</label>
      <input
        {...register("name", { required: "Name is required." })}
        className="border p-2 rounded"
      />
      {errors.name && <p className="text-red-500">{"valid name"}</p>}

      {/* Email */}
      <label>Email</label>
      <input
        {...register("email", {
          required: "Valid email is required.",
          pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Invalid email format.",
          },
        })}
        className="border p-2 rounded"
      />
      {errors.email && <p className="text-red-500">{""}</p>}

      {/* Phone */}
      <label>Phone</label>
      <input
        {...register("phone", {
          required: "Phone number is required.",
          pattern: {
            value: /^[0-9]{10,15}$/,
            message: "Enter a valid phone number.",
          },
        })}
        className="border p-2 rounded"
      />
      {errors.phone && <p className="text-red-500">Phone number</p>}

      {/* Address */}
      <label>Address</label>
      <textarea
        {...register("address", { required: "Address is required." })}
        className="border p-2 rounded"
      />
      {errors.address && <p className="text-red-500">address</p>}

      {/* City */}
      <label>City</label>
      <input
        {...register("city", { required: "City is required." })}
        className="border p-2 rounded"
      />
      {errors.city && <p className="text-red-500">city</p>}

      {/* State */}
      <label>State</label>
      <input
        {...register("state", { required: "State is required." })}
        className="border p-2 rounded"
      />
      {errors.state && <p className="text-red-500">state</p>}

      {/* Postal Code */}
      <label>Postal Code</label>
      <input
        {...register("postalCode", {
          required: "Postal Code is required.",
          pattern: {
            value: /^[0-9]{5,10}$/,
            message: "Enter a valid postal code.",
          },
        })}
        className="border p-2 rounded"
      />
      {errors.postalCode && <p className="text-red-500">Postal code</p>}

      {/* Payment Method */}
      <label>Payment Method</label>
      <select
        {...register("paymentMethod", { required: "Payment method is required." })}
        className="border p-2 rounded"
      >
        <option value="">Select Payment Method</option>
        <option value="Credit Card">Credit Card</option>
        <option value="Debit Card">Debit Card</option>
        <option value="PayPal">PayPal</option>
        <option value="Cash on Delivery">Cash on Delivery</option>
      </select>
      {errors.paymentMethod && <p className="text-red-500">valid payment</p>}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        {isSubmitting ? "Submitting..." : "Place Order"}
      </button>
    </form>
  );
}
