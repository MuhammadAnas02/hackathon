"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCart } from "@/app/context/CartContext";
import Button from "@mui/material/Button";  
import { z } from "zod";
import { FaStripe } from "react-icons/fa";

const orderSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  address: z.string().min(10, "Address must be at least 10 characters"),
  phone: z.string().min(10, "Invalid phone number"),
});

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const handleCheckout = async () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ products: cart }), // Send cart items to the API
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe Checkout
      } else {
        console.error('Error during checkout:', data.error);
      }
    } catch (error) {
      console.error('Failed to create checkout session:', error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(orderSchema),
  });

  const onSubmit = async (data: any) => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // ✅ Ensure valid image URLs before sending data
    const orderData = {
      ...data,
      cartItems: cart.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
        image: item.image || "/default-avatar.png", //
      })),
      totalPrice,
    };

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) throw new Error("Failed to place order");

      const result = await response.json();
      alert("Order placed successfully!");
      clearCart(); // Clear cart after successful order
    } catch (error) {
      console.error("Order Error:", error);
      alert("Error placing order. Try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-5 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-5">Checkout</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("name")} placeholder="Full Name" className="border p-2 w-full" />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <input {...register("email")} placeholder="Email" className="border p-2 w-full" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input {...register("address")} placeholder="Address" className="border p-2 w-full" />
        {errors.address && <p className="text-red-500">{errors.address.message}</p>}

        <input {...register("phone")} placeholder="Phone Number" className="border p-2 w-full" />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}

        <button type="submit" className="bg-black text-white px-4 py-2 rounded-md w-full">
          Place Order
        </button>
        <Button
  onClick={handleCheckout}
  variant="contained"
  sx={{
    backgroundColor: "#635BFF", // Stripe brand color
    color: "white",
    padding: "12px 20px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    textTransform: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px", // Spacing between text & icon
    "&:hover": { backgroundColor: "#5045e6" }, // Hover effect
  }}
  fullWidth
>
  <FaStripe size={20} />
  Pay with Stripe
</Button>
      </form>
    </div>
  );
}
