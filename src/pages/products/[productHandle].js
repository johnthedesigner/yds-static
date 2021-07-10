import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import _ from 'lodash'

import Page from '../../components/page'
import Hero from '../../components/hero'
import pages from '../../pages.json'
import { addToCart, getProductByHandle, getProducts } from '../../utils'

export async function getStaticProps(context) {
    let fetchedProduct = await getProductByHandle(context.params.productHandle)
    return {
        props: {
            productHandle: context.params.productHandle,
            title: fetchedProduct.title,
        },
    }
}

export async function getStaticPaths() {
    let products = await getProducts()

    return {
        paths: _.map(products, (product) => {
            return { params: { productHandle: product.handle } }
        }),
        fallback: true,
    }
}

export default function Product(props) {
    console.log(props)
    let [product, setProduct] = useState([])
    useEffect(async () => {
        let fetchedProduct = await getProductByHandle(props.productHandle)
        console.log(fetchedProduct)
        setProduct(fetchedProduct)
    }, [product.title, props])

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
