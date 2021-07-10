import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import _ from 'lodash'

import Page from '../../components/page'
import Hero from '../../components/hero'
import pages from '../../pages.json'
import { addToCart, shopify } from '../../utils'

export default function Product() {
    let [product, setProduct] = useState([])
    const router = useRouter()
    const { productHandle } = router.query
    useEffect(async () => {
        if (productHandle) {
            await shopify.product
                .fetchByHandle(productHandle)
                .then((fetchedProduct) => {
                    // Do something with the products
                    setProduct(fetchedProduct)
                })
        }
    })

    const wrapItem = (id) => {
        return [
            {
                variantId: id,
                quantity: 2,
            },
        ]
    }

    return (
        <Page page={pages.home}>
            <Hero title="Product" image="/purple-flowers.jpg" />
            <div>
                <h2>{product.title}</h2>
                <button
                    onClick={() => {
                        addToCart(wrapItem(product.variants[0].id))
                    }}
                >
                    Add to Cart
                </button>
            </div>
        </Page>
    )
}
