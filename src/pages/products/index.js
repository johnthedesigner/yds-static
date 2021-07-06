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
            <div>
                {_.map(products, (product) => {
                    let path = `/products/${product.handle}/`
                    return (
                        <div key={product.handle}>
                            <Link href={path}>
                                <a>{product.title}</a>
                            </Link>
                        </div>
                    )
                })}
            </div>
            <div>
                <h4>Size</h4>
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
        </Page>
    )
}
