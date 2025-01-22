import { defineField, defineType } from "sanity";

export const Order = defineType({
  name: "order",
  type: "document",
  title: "Order",
  fields: [
    defineField({ name: "name", type: "string", title: "Name" }),
    defineField({ name: "userEmail", type: "string", title: "User Email" }),
    defineField({ name: "phone", type: "string", title: "Phone" }),
    defineField({ name: "address", type: "text", title: "Address" }),
    defineField({ name: "paymentMethod", type: "string", title: "Payment Method" }),
    defineField({ name: "totalPrice", type: "number", title: "Total Price" }),
    defineField({ name: "orderDate", type: "datetime", title: "Order Date" }),
    defineField({ name: "status", type: "string", title: "Order Status" }),
    defineField({
      name: "cart",
      type: "array",
      title: "Cart Items",
      of: [{ type: "reference", to: [{ type: "product" }] }],
    }),
  ],
});
