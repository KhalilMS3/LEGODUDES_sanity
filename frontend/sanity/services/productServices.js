import { client, writeClient } from "../client";

export async function fetchAllProducts(){
    
    const data = client.fetch(`*[_type == "products"]{
        _id, 
        productname,
        "slug": producturl.current
        price,
        stock,
        category,
        "catname": category->categorytitle,
        "catslug": category->categoryurl.current,
        "image": productimage.asset->url
    }`)  
    return data
}

//Funksjon som henter et produkt basert på en slug:
export async function fetchProductBySlug(slug) {
    const data = await client.fetch(`*[_type == "products" && producturl.current == $slug]{
        _id,
        productname,
        description,
        "categoryname": category->categorytitle,
        "catslug": category->categoryurl.current,
        "image": productimage.asset->url,
        price,
        stock,
        reviews,
    }`, { slug })
    return data
}

// Funksjon som tar imot informasjon og oppdaterer reviews-arrayen i et produkt
export async function updateReview(productid, reviewer, comment, rating) {
    const result = await writeClient.patch(productid).setIfMissing({ reviews: [] })
        .append("reviews", [{ reviewer: reviewer, comment: comment, rating: rating }])
        .commit({ autoGenerateArrayKeys: true })
        .then(() => { return "Success" })
        .catch((error) => { return "Error: " + error.message })
    return result
}


/* NOTES *
 ******** 
 *1 Use: sanity studio -> vision to test queries to see live results 
 *2 Check sanity GROQ doc for more info about queries 
 *3 what comes inside '{}' are the fields you want to retrieve from sanity
 */

 /* NOTES FROM CODE *
 ******** 
 *1 fields with '_' are default fields made by sanity
 *2 "new field": <- like this, you can make a new field and insert custom data in by using refernce
    example:
    "catslug": category->categoryurl.current
    - here we create a field called "catname", then we chose the the actual field we 
        want to retrieve info from then the actual field. the '->' used leads to which subfield you 
        want to get.

    tree-example:
    1-"catslug": 2-> Producturl:{ 3-> current:master-wu }
    }
 *3 
 */