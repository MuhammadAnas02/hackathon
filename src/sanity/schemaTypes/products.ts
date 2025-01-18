import {defineField, defineType} from 'sanity'
export  const Products =defineType({
    name: "product",
    type: "document",
    title: "Product",
    fields:[
        defineField(
            {
                name:"title",
                type: "string",
                title: "Product tilte",
            }),
            defineField(
                {
                    name: 'slug',
                    type: 'slug',
                    title: 'slug',
                    options: {source: 'name'}

                }
            ),

           defineField( {
                name:"description",
                type: "string",
                title: "Product description",
            }),
            defineField({
                name:"price",
                type: "number",
                title: "Product price",
            }),
            defineField({
                name:"image",
                type: "image",
                title: "Product Image",
            }),
       
    ]
})