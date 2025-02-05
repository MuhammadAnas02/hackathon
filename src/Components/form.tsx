// components/CheckoutForm.tsx
"use client";
import React, { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import { checkoutSchema } from "@/lib/checkoutschema";
import { z } from "zod";

export default function CheckoutForm() {
  const { cart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the form data using Zod
    try {
      checkoutSchema.parse(formData); // Will throw an error if invalid
      setIsSubmitting(true);

      // Submit data to the API
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, cartItems: cart }),
      });

      const result = await response.json();

      if (result.success) {
        // Redirect or show success message
        alert("Order placed successfully!");
      } else {
        setError("Failed to place order");
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message); // Display the first error
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full md:w-[600px] mx-auto mt-6">
      <div className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Your Name"
          className="border p-2"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Email"
          className="border p-2"
        />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="Phone Number"
          className="border p-2"
        />
        <textarea
          name="address"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          placeholder="Shipping Address"
          className="border p-2"
        />
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-4 p-2 bg-blue-500 text-white w-full"
      >
        {isSubmitting ? "Processing..." : "Place Order"}
      </button>
    </form>
  );
}
