"use client"
import React from "react";
import { useForm } from "react-hook-form";

interface Props {
  cart: { id: string; title: string; price: number; quantity: number }[];
  totalPrice: number;
  onClose: () => void;
}

export default function CheckoutForm({ cart, totalPrice,  onClose }: Props) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data: any) => {
    const {userId, userEmail, quantity, totalPrice, orderDate, status, address, postId} = data

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        body: JSON.stringify({userId, userEmail, quantity, totalPrice, orderDate, status, address, postId}),
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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <label>Name</label>
      <input {...register("name", { required: true })} />
      {errors.name && <p>Name is required.</p>}

      <label>Email</label>
      <input {...register("email", { required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })} />
      {errors.email && <p>Valid email is required.</p>}

      <label>Address</label>
      <textarea {...register("address", { required: true })} />
      {errors.address && <p>Address is required.</p>}

      


      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Place Order"}
      </button>
    </form>
  );
}
