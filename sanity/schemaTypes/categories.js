export const categories = 
    {
        title: "Kategorier", // Title is showen in studio
        name: "categories", // name is used as a programmetic name to deal with when you code
        type: "document",   // schema type
        fields:[
            {
                title: "Kategoritittel",
                name: "categorytitle",
                type: "string"

            },
            {
                title: "Kategorilink",
                name: "categoryurl",
                type: "slug",
                options:{
                    source: "categorytitle",
                    slugify: input => input.toLowerCase().replace(/\s+/g, '-')
                }
            }
        ]

    }
