import _ from 'lodash'
import Head from 'next/head'
import Link from 'next/link'

import Navbar from '../components/navbar'
import pages from '../pages'
// import IconFB from '../public/icon-fb.svg'
// import IconIG from '../public/icon-ig.svg'

export default function Page(props) {
    return (
        <div className="page">
            <Head>
                <title>{props.page.title}</title>
                <meta name="description" content={props.page.description} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <main className={`page__body ${props.backgroundClass}`}>
                <Navbar currentUrl={props.page.url} />
                {props.children}
            </main>
            <footer className="footer">
                <p>Lorem ipsum dolor sit amet.</p>
            </footer>
        </div>
    )
}
