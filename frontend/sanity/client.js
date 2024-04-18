import {createClient} from '@sanity/client'

// Denne klienten har IKKE mulighet til å skrive til sanity - BEGRENSET TILGANG
export const client = createClient({
    projectId: "a62vkzxr",   // sanity.io/manage -> select your project -> copy PROJECT ID
    dataset: "production",   // sanity studio -> vision -> DATASET
    useCdn: true,            // set this to true to be able to handle imgs, text etc.
    apiVersion: "2022-03-07" // sanity studio -> vision -> API VERSJON
})


// Denne klienten har mulighet til å skrive til sanity
export const writeClient = createClient({
    projectId: "a62vkzxr",   
    dataset: "production",  
    useCdn: false,            
    apiVersion: "2022-03-07",
    token: "skJDWNPUvDEXM5QEzijvXouCOz4V1fehIjvfV9zmJ5JnuJrHKWRDTF9ioRXb6Vjif4qFoXFA6VcBvO8sf4PTiDFR3zmod0agdSNK5oBZd7kwo1ymV6csMbii2RvRI5t7lSOAQYG86mppnIm3Xg6LMsBgc5yF2Y0EExDMWKL4aQMmmNZnt1KQ"
})