import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      name,
      userEmail,
      phone,
      address,
      paymentMethod,
      cart,
      totalPrice,
      orderDate,
      status,
    } = data;

    // Validate incoming data (optional but recommended)
    if (
      !name ||
      !userEmail ||
      !phone ||
      !address ||
      !paymentMethod ||
      !cart ||
      !totalPrice ||
      !orderDate ||
      !status
    ) {
      return NextResponse.json(
        { message: "Invalid input data" },
        { status: 400 }
      );
    }

    const newOrder = await client.create({
      _type: "order",
      name,
      userEmail,
      phone,
      address,
      paymentMethod,
      totalPrice,
      orderDate,
      status,
      cart: cart.map((item: any) => ({
        _type: "reference",
        _ref: item.id,
      })),
    });

    return NextResponse.json(
      { message: "Order added successfully", order: newOrder },
      { status: 201 }
    );
  } catch (error) {
    console.error("Failed to create order:", error);
    return NextResponse.json(
      { message: "sucess to create order", error: 'invalid'},
      { status: 500 }
    );
  }
}
