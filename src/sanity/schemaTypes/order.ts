import { defineField, defineType } from 'sanity';

export const Order = defineType({
  name: 'order',
  type: 'document',
  title: 'Order',
  fields: [
    defineField({
      name: 'userEmail',
      type: 'string',
      title: 'User Email',
      description: 'The email of the user who placed the order',
      readOnly: true,
    }),
    defineField({
      name: 'products',
      type: 'reference',
      title: 'Product',
      description: 'The product being ordered',
      to: [{ type: 'product' }], // Reference to the product schema
      readOnly: true, 
    }),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'totalPrice',
      type: 'number',
      title: 'Total Price',
      description: 'The total price of the order (quantity * product price)',
      readOnly: true,
    }),

    // defineField({
    //   name: 'status',
    //   type: 'string',
    //   title: 'Order Status',
    //   options: {
    //     list: [
    //       { title: 'Pending', value: 'pending' },
    //       { title: 'Shipped', value: 'shipped' },
    //       { title: 'Delivered', value: 'delivered' },
    //       { title: 'Cancelled', value: 'cancelled' },
    //     ],
    //   },
    //   readOnly: true,
    // }),
    defineField({
      name: 'address',
      type: 'text',
      title: 'Shipping Address',
      description: 'The address where the order should be delivered',
      readOnly: true,
    }),
  ],
});
