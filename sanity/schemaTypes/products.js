export const products= {
    title: "produkter",
    name: "products",
    type: "document",
    fields:[
        {
            title: "Produktnavn",
            name: "productname",
            type: "string"

        },
        {
            title: "Produktlink",
            name: "Producturl",
            type: "slug",
            options:{
                source: "productname",
                slugify: input => input.toLowerCase().replace(/\s+/g, "-")
            }
        },
        {
            title: "Pris",
            name: "price",
            type: "number"

        },
        {
            title: "Produktbilde",
            name: "productimage",
            type: "image"

        },
        {
            title: "Kategori",
            name: "category",
            type: "reference", // refererer til inneholdstype
            to: [{type: "categories"}] // her refererer vi til name: Categories i categories.js
        },
        {
            title: "Lager",
            name: "stock",
            type: "number"
        }

    ] 
}