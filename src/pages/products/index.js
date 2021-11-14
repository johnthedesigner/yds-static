import { useEffect, useState } from 'react'
import Link from 'next/link'
import _ from 'lodash'

import Page from '../../components/page'
import Hero from '../../components/hero'
import pages from '../../pages.json'
import { getCollections, getProducts } from '../../utils'

export default function Products() {
    let [products, setProducts] = useState([])
    let [collections, setCollections] = useState([])

    const getGroupName = (collection) => {
        return _.split(collection.title, ': ')[0]
    }

    const getCollectionName = (collection) => {
        return _.split(collection.title, ': ')[1]
    }

    const sortCollections = (collections) => {
        let sortedCollections = {}
        _.map(collections, (collection) => {
            let group = getGroupName(collection)
            if (!sortedCollections[group]) {
                sortedCollections[group] = [collection]
            } else {
                sortedCollections[group] = [
                    ...sortedCollections[group],
                    collection,
                ]
            }
        })
        return sortedCollections
    }

    useEffect(async () => {
        setProducts(await getProducts())
        setCollections(sortCollections(await getCollections()))
    }, [])

    return (
        <Page page={pages.about}>
            <Hero title="Products" image="/purple-flowers.jpg" />
            <div className="product-listing">
                <div className="product-listing__sidebar">
                    <div>
                        <h4>Color</h4>
                        {_.map(collections.Color, (collection) => {
                            return (
                                <div key={collection.handle}>
                                    <a>{getCollectionName(collection)}</a>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <h4>Size</h4>
                        {_.map(collections.Size, (collection) => {
                            return (
                                <div key={collection.handle}>
                                    <a>{getCollectionName(collection)}</a>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <h4>Form</h4>
                        {_.map(collections.Form, (collection) => {
                            return (
                                <div key={collection.handle}>
                                    <a>{getCollectionName(collection)}</a>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="product-listing__body">
                    <div className="product-listing__grid">
                        {_.map(_.sortBy(products, 'title'), (product) => {
                            let path = `/products/${product.handle}/`
                            return (
                                <div
                                    className="product-listing__thumbnail"
                                    key={product.handle}
                                >
                                    <Link href={path}>
                                        <a className="product-listing__product-name">
                                            {product.title}
                                        </a>
                                    </Link>
                                    <img
                                        className="product-listing__product-image"
                                        src={product.images[0].originalSrc}
                                        alt={product.images[0].altText}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Page>
    )
}
