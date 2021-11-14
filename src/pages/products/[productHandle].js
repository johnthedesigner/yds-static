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
    let [product, setProduct] = useState([])
    useEffect(async () => {
        let fetchedProduct = await getProductByHandle(props.productHandle)
        setProduct(fetchedProduct)
    }, [product.title, props])

    const wrapItem = (id) => {
        return [
            {
                variantId: id,
                quantity: 1,
            },
        ]
    }

    return (
        <Page page={pages.home}>
            <Hero title="Product" image="/purple-flowers.jpg" />
            <div className="product-page__body">
                <div className="product-page__images">
                    {_.map(product.images, (image) => {
                        return (
                            <img
                                key={image.id}
                                src={image.originalSrc}
                                alt={image.altText}
                            />
                        )
                    })}
                </div>
                <div className="product-page__details">
                    <h4>{product.productType}</h4>
                    <h2>{product.title}</h2>
                    <p>{product.totalInventory} left in stock.</p>
                    {_.map(product.collections, (collection) => {
                        let collectionParts = collection.title.split(': ')
                        return (
                            <p key={collectionParts[0] + collectionParts[1]}>
                                <b>{collectionParts[0]}:</b>{' '}
                                {collectionParts[1]}
                            </p>
                        )
                    })}
                    <button
                        onClick={() => {
                            addToCart(wrapItem(product.variants[0].id))
                        }}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </Page>
    )
}
