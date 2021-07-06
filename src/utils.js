import getConfig from 'next/config'
import Client from 'shopify-buy'

const { publicRuntimeConfig } = getConfig()
const { DOMAIN, SHOPIFY_DOMAIN, SHOPIFY_TOKEN } = publicRuntimeConfig

if (typeof window !== 'undefined') {
    const localStorage = window.localStorage
}

export const pageTitle = (segment) => {
    let fragment = 'Yankee Dahlia Society'
    return segment ? `${fragment} | ${segment}` : fragment
}

export const getUrl = (path) => {
    return path ? DOMAIN + path : DOMAIN
}

// Shopify Client
export const shopify = Client.buildClient({
    domain: SHOPIFY_DOMAIN,
    storefrontAccessToken: SHOPIFY_TOKEN,
})

export const getProducts = async () => {
    let products = []
    await shopify.product.fetchAll().then((fetchedProducts) => {
        products = fetchedProducts
    })
    return products
}

export const getCollections = async () => {
    let collections
    await shopify.collection
        .fetchAllWithProducts()
        .then((fetchedCollections) => {
            collections = fetchedCollections
        })
    return collections
}

export const getProductById = async (id) => {
    let product
    await shopify.product.fetch(id).then((fetchedProduct) => {
        product = fetchedProduct
    })
    return product
}

export const getCart = async () => {
    console.log('getting cart...')
    if (localStorage) {
        console.log('local storage exists')
        let checkoutId = localStorage.getItem('checkoutId')
        if (checkoutId !== null) {
            console.log('checkoutId isnt null', checkoutId)
            return checkoutId
        } else {
            console.log('checkoutId is null', checkoutId)
            await shopify.checkout.create().then((checkout) => {
                // Do something with the checkout
                console.log('requested new checkout from spotify', checkout.id)
                localStorage.setItem('checkoutId', checkout.id)
                return checkout
            })
        }
    } else {
        console.log('local storage does not exist')
        return null
    }
}
