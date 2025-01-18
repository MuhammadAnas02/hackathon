import { client } from '@/sanity/lib/client';
import { NextResponse } from 'next/server';

export async function POST(req: Request, res: Response) {
  const data = await req.json();
  const { userId, userEmail, quantity, totalPrice, orderDate, status, address, postId } = data;

  try {
    const newOrder = await client.create({
      _type: 'order',
      userId,
      userEmail,
      quantity,
      status,
      totalPrice,
      orderDate,
      address,
      products: {
        _type: 'reference',
        _ref: postId,
      },
    });

    return NextResponse.json(
      { message: 'Order added successfully', order: newOrder },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to create order', error },
      { status: 500 }
    );
  }
}
