import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-01-27.acacia',
});

export async function POST(req: Request) {
  try {
    const { products } = await req.json(); // Extract products from request body

    if (!Array.isArray(products) || products.length === 0) {
      return new Response(JSON.stringify({ error: 'Invalid product data' }), { status: 400 });
    }

    // Convert products into Stripe line items
    const lineItems = products.map((item) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.title,
          images: item.image ? [item.image] : [], // Ensure images is an array
        },
        unit_amount: Math.round(Number(item.price) * 100), // Convert price to cents
      },
      quantity: item.quantity > 0 ? item.quantity : 1, // Ensure valid quantity
    }));

    // Create a Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
    });

    return new Response(JSON.stringify({ url: session.url }), { status: 200 });
  } catch (error) {
    console.error('Stripe Checkout Error:', error);
    return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 });
  }
}
