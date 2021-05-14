import getConfig from 'next/config'
import Client from 'shopify-buy'

const { publicRuntimeConfig } = getConfig()
const { DOMAIN, SHOPIFY_DOMAIN, SHOPIFY_TOKEN } = publicRuntimeConfig

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

export const getProducts = () => {
    shopify.product.fetchAll().then((fetchedProducts) => {
        return fetchedProducts
    })
}

export const getCollections = () => {
    shopify.collection.fetchAllWithProducts().then((fetchedCollections) => {
        return fetchedCollections
    })
}

export const getProductById = (id) => {
    shopify.product.fetch(id).then((product) => {
        return product
    })
}
