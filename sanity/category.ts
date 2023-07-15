import { defineField ,defineType } from "sanity"
export const category = defineType({
    name : "category" ,
    title : "Category" ,
    type : "document" ,
    fields: [
        defineField(
        {
            name :"name" ,
            title : "Category Name" ,
            type: "string"
        })
    ]
})

//document ki type is definetype and field ki type is define feild