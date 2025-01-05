export  const Products ={
    name: "product",
    type: "document",
    title: "Products",
    fields:[
        {
            name:"Title",
            type: "string",
            title: "Product tilte",
        },
        {
            name:"description",
            type: "string",
            title: "Product description",
        },
        {
            name:"price",
            type: "number",
            title: "Product price",
        },
        {
            name:"image",
            type: "image",
            title: "Product Image",
        },
    ]
}