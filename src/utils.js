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

export const getProducts = async () => {
    let products = []
    await shopify.product.fetchAll().then((fetchedProducts) => {
        products = fetchedProducts
    })
    console.log('Get Products', products)
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

export const getProductByHandle = async (handle) => {
    let product
    await shopify.product.fetchByHandle(handle).then((fetchedProduct) => {
        product = fetchedProduct
    })
    console.log('Get Product', product)
    return product
}

export const getCart = async () => {
    // const qtyQuery = shopify.graphQLClient.query((root) => {
    //     root.add('cart', {}, (cart) => {
    //         cart.add('id')
    //         cart.addConnection('lineItems', {}, (lineItem) => {
    //             lineItem.add('id')
    //             lineItem.addConnection('variant', {}, (variant) => {
    //                 variant.add(id)
    //                 variant.add(quantityAvailable)
    //             })
    //         })
    //         cart.add('id')
    //         cart.addConnection(
    //             'variants',
    //             { args: { first: 99 } },
    //             (variant) => {
    //                 variant.add('id')
    //                 variant.add('availableForSale')
    //                 variant.add('quantityAvailable')
    //             }
    //         )
    //     })
    // })

    // const cartQuery = client.graphQLClient.query((root) => {
    //     root.addConnection('cart', {}, (cart) => {
    //         cart.add('quantityAvailable')
    //     })
    // })
    if (localStorage) {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (cart !== null) {
            await shopify.checkout.fetch(cart.id).then((fetchedCart) => {
                console.log('Get Cart', fetchedCart)
                setCart(fetchedCart)
                return fetchedCart
            })
        } else {
            await shopify.checkout.create().then((createdCart) => {
                console.log('Create Cart', createdCart)
                setCart(createdCart)
                return createdCart
            })
        }
    } else {
        return null
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
