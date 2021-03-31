import { useEffect, useState } from 'react'
import _ from 'lodash'

import Page from '../components/page'
import Hero from '../components/hero'
import pages from '../pages.json'
import { shopify } from '../utils'

export default function About() {
    let [products, setProducts] = useState([])

    useEffect(() => {
        // Fetch all products in your shop
        shopify.product.fetchAll().then((products) => {
            // Do something with the products
            console.log('products', products)
            setProducts(products)
        })
    })

    return (
        <Page page={pages.about}>
            <Hero title="Products" image="/purple-flowers.jpg" />
            <div>
                {_.map(products, (product) => {
                    return <div>{product.title}</div>
                })}
            </div>
        </Page>
    )
}
