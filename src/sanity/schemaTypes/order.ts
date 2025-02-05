import { defineField, defineType } from "sanity";

export const Order = defineType({
  name: "order",
  type: "document",
  title: "Order",
  readOnly: true, // Makes the order read-only
  fields: [
    defineField({
      name: "name",
      title: "Customer Name",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Delivery Address",
      type: "string",
    }),
    defineField({
      name: "totalPrice",
      title: "Total Price",
      type: "number",
    }),
    defineField({
      name: "cartItems",
      title: "Cart Items",
      type: "array",
      of: [
        {
          type: "object",
          name: "cartItem",
          fields: [
            { name: "productId", title: "Product ID", type: "string" },
            { name: "title", title: "Product Name", type: "string" },
            { name: "price", title: "Price", type: "number" },
            { name: "quantity", title: "Quantity", type: "number" },
            { name: "image", title: "Product Image", type: "url" },
          ],
        },
      ],
    }),
    defineField({
      name: "status",
      title: "Order Status",
      type: "string",
      options: {
        list: ["pending", "shipped", "delivered"],
      },
    }),
    defineField({
      name: "createdAt",
      title: "Order Date",
      type: "datetime",
    }),
  ],
});
