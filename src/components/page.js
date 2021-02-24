import _ from 'lodash'
import Head from 'next/head'
import Link from 'next/link'

import Navbar from '../components/navbar'
import FooterLogo from '../public/logo-footer.svg'
import IconFB from '../public/icon-fb.svg'
import IconIG from '../public/icon-ig.svg'

export default function Page(props) {
    // const OGImage = (props) => {
    //     if (props.image) {
    //         return <meta name="og:image" content={props.image} />
    //     } else {
    //         return (
    //             <meta name="og:image" content="/android-chrome-192x192.png" />
    //         )
    //     }
    // }

    return (
        <div className="page">
            <Head>
                <title>{props.page.title}</title>
                <meta name="description" content={props.page.description} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="og:image" content="/android-chrome-192x192.png" />
                {/* <OGImage /> */}
            </Head>
            <main className={`page__body ${props.backgroundClass}`}>
                <Navbar currentUrl={props.page.url} />
                {props.children}
            </main>
            <footer className="footer">
                <div className="footer__body">
                    <FooterLogo />
                    <ul className="footer__menu">
                        <li className="footer__menu-item">
                            <Link href="/">
                                <a title="Home | Yankee Dahlia Society">Home</a>
                            </Link>
                        </li>
                        <li className="footer__menu-item">
                            <Link href="/membership/">
                                <a title="Membership | Yankee Dahlia Society">
                                    Membership
                                </a>
                            </Link>
                        </li>
                        <li className="footer__menu-item">
                            <Link href="/events/">
                                <a title="Events | Yankee Dahlia Society">
                                    Events
                                </a>
                            </Link>
                        </li>
                        <li className="footer__menu-item">
                            <Link href="/tubers/">
                                <a title="Our Tubers | Yankee Dahlia Society">
                                    Our Tubers
                                </a>
                            </Link>
                        </li>
                        <li className="footer__menu-item">
                            <Link href="/about/">
                                <a title="About Us | Yankee Dahlia Society">
                                    About Us
                                </a>
                            </Link>
                        </li>
                        <li className="footer__menu-item">
                            <Link href="http://instagram.com/yankeedahliasociety">
                                <a
                                    className="footer__social-icon"
                                    title="Yankee Dahlia Society on Instagram"
                                    target="_blank"
                                >
                                    <IconIG />
                                </a>
                            </Link>
                            <Link href="http://facebook.com/yankeedahliasociety">
                                <a
                                    className="footer__social-icon"
                                    title="Yankee Dahlia Society on Facebook"
                                    target="_blank"
                                >
                                    <IconFB />
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer__bottom">
                    <p className="footer__legal-text">
                        Yankee Dahlia Society, 501(c)3 – © Copyright 2021 Yankee
                        Dahlia Society
                    </p>
                </div>
            </footer>
        </div>
    )
}
