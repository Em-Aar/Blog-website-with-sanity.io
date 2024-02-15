import { defineField, defineType } from "sanity";

export default defineType({
    name:'author',
    type:'document',
    title:'Author',
    fields:[
        defineField(
            {
                name:'name',
                type:'string',
                title:'Author Name'
            }
        ),
        defineField(
            {
                name:'authorImage',
                type:'image',
                title:'Author Image',
                options:{
                    hotspot:true
                }
            }
        ),
        defineField({
            name:'bio',
            type:'text',
            title:'Bio'
        })
    ]
})