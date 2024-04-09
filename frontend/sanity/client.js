import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: "a62vkzxr",   // sanity.io/manage -> select your project -> copy PROJECT ID
    dataset: "production",   // sanity studio -> vision -> DATASET
    useCdn: true,            // set this to true to be able to handle imgs, text etc.
    apiVersion: "2022-03-07" // sanity studio -> vision -> API VERSJON
})