import {defineField, defineType} from 'sanity'
export  const Products =defineType({
    name: "product",
    type: "document",
    title: "Product",
    fields:[
        defineField({
            name: "name",
            title: "Product Name",
            type: "string",
            validation: (Rule) => Rule.required(),
          }),
            defineField(
                {
                    name: 'slug',
                    type: 'slug',
                    title: 'slug',
                    options: {source: 'name',
                    maxLength: 96,
                    },
                    validation: Rule => Rule.required(),

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
                name: "discount",
                type: "number",
                title: "Product Discount",
                validation: (Rule) => Rule.required(),

            }),
            defineField({
                name:"image",
                type: "image",
                title: "Product Image",
            }),
            defineField({
                name: "category",
                title: "Category",
                type: "array",
                of: [{type: "reference", to: [{type: "category"}]}],
            }),
            defineField({
                name: "stock",
                type: "number",
                title: "Product Stock",
                validation: (Rule) => Rule.min(0),
            }),
            defineField({
                name: "status",
                type: "string",
                title: "Product Status",
                options: {
                    list: [
                        {title: "New", value: "new"},
                        {title: "Hot", value: "hot"},
                        {title: "Sale", value: "sale"},

                    ]
                }
            }),
            defineField({
                name: "variant",
                title: "Product Variant",
                type: "string",
                options:{
                    list:[
                        {title: "Sofa", value: "sofa"},
                        {title: "Dining", value: "dining"},
                        {title: "Table", value: "table"},
                        {title: "Lamp", value: "lamp"},
                        {title: "Chair", value: "chair"},



                    ]
                }
            })
    ],
    preview:{
        select:{
            title: "name",
            media: "image",
            subtitle: "price",
        },
        prepare(selection){
            const{title, media, subtitle} = selection;
            const image = media && media[0];
            return{
                title: title,
                subtitle: `$${subtitle}`,
                media: image,
            }
        }
    }
})