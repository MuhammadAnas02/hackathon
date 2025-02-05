import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";
 // Ensure this is correctly configured
import { z } from "zod";

// Define Zod Schema for Order
const OrderSchema = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.string().email("Invalid email"),
  address: z.string().min(5, "Address is required"),
  phone: z.string().min(10, "Invalid phone number"),
  cartItems: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      price: z.number(),
      quantity: z.number(),
      image: z.string().url().optional(), // Ensure image is a valid URL
    })
  ),
  totalPrice: z.number().min(1, "Total price must be greater than 0"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsedData = OrderSchema.parse(body); // Validate request data

    // Prepare the order data for Sanity
    const orderData = {
      _type: "order",
      ...parsedData,
      cartItems: parsedData.cartItems.map((item) => ({
        _key: item.id,
        ...item,
      })),
    };

    // Save the order to Sanity
    const result = await client.create(orderData);

    return NextResponse.json({ success: true, orderId: result._id }, { status: 201 });
  } catch (error) {
    console.error("Error in /api/order:", error);
    return NextResponse.json({ success: false, message: "Server error", error }, { status: 500 });
  }
}
