import _ from 'lodash'
import getConfig from 'next/config'
import Client from 'shopify-buy/index.unoptimized.umd'

const { publicRuntimeConfig } = getConfig()
const { DOMAIN, SHOPIFY_DOMAIN, SHOPIFY_TOKEN } = publicRuntimeConfig

if (typeof window !== 'undefined') {
    const localStorage = window.localStorage
}

const setCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart))
    window.dispatchEvent(new Event('storage'))
    console.log('Update Cart', cart)
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

export const getCollections = async () => {
    let collections
    await shopify.collection
        .fetchAllWithProducts()
        .then((fetchedCollections) => {
            collections = fetchedCollections
        })
    return collections
}

// Build a custom product query using the unoptimized version of the SDK
// Fetch product with total inventory
const productQuery = shopify.graphQLClient.query((root) => {
    root.addConnection(
        'products',
        {
            args: {
                first: 10,
            },
        },
        (product) => {
            // Add fields to be returned
            product.add('descriptionHtml')
            product.add('handle')
            product.add('options')
            product.add('title')
            product.add('tags')
            product.add('totalInventory')
            product.addConnection(
                'variants',
                { args: { first: 10 } },
                (variant) => {
                    variant.add('price')
                }
            )
            product.addConnection(
                'images',
                { args: { first: 10 } },
                (image) => {
                    image.add('id')
                    image.add('altText')
                    image.add('originalSrc')
                }
            )
            product.addConnection(
                'collections',
                { args: { first: 10 } },
                (collection) => {
                    collection.add('handle')
                    collection.add('title')
                }
            )
        }
    )
})

export const getProducts = async () => {
    let products
    // Call the send method with the custom products query
    await shopify.graphQLClient.send(productQuery).then(({ model }) => {
        // Do something with the products
        products = model.products
    })
    return products
}

export const getProductByHandle = async (handle) => {
    let product
    // Call the send method with the custom products query
    await shopify.graphQLClient.send(productQuery).then(({ model }) => {
        // Do something with the products
        product = _.find(model.products, (product) => {
            return product.handle == handle
        })
    })

    return product
}

export const getCart = async () => {
    if (localStorage) {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (cart !== null) {
            let newCart = {}
            await shopify.checkout.fetch(cart.id).then((fetchedCart) => {
                // console.log('Fetched Cart', { ...fetchedCart })
                // setCart(fetchedCart)
                newCart = { ...fetchedCart }
            })
            return newCart
        } else {
            let newCart = {}
            await shopify.checkout.create().then((createdCart) => {
                // console.log('Create Cart', { ...createdCart })
                setCart({ ...createdCart })
                newCart = { ...createdCart }
            })
            return newCart
        }
    } else {
        return { id: '', webUrl: '' }
    }
}

export const addToCart = async (item) => {
    let openCart = await getCart()
    await shopify.checkout.addLineItems(openCart.id, item).then((cart) => {
        setCart(cart)
    })
}

export const updateLineItems = async (items) => {
    let openCart = await getCart()
    await shopify.checkout.updateLineItems(openCart.id, items).then((cart) => {
        setCart(cart)
    })
}
