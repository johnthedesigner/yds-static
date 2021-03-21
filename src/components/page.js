import _ from 'lodash'
import Head from 'next/head'
import Link from 'next/link'

import { getUrl } from '../utils'
import Navbar from '../components/navbar'
import FooterLogo from '../public/logo-footer.svg'
import IconFB from '../public/icon-fb.svg'
import IconIG from '../public/icon-ig.svg'
import Donate from '../components/donate'

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
                <meta
                    property="og:image"
                    key="og:image"
                    content={getUrl('/dividing-dahlias.jpg')}
                />
            </Head>
            <main className={`page__body ${props.backgroundClass}`}>
                <Navbar currentPath={props.page.path} />
                {props.children}
            </main>
            <footer className="footer">
                <div className="footer__body">
                    <FooterLogo />
                    <ul className="footer__menu">
                        <li className="footer__menu-item">
                            <Link href="/">
                                <a title="Home | Yankee Dahlia Society, New England">
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li className="footer__menu-item">
                            <Link href="/membership/">
                                <a title="Membership | Yankee Dahlia Society, New England">
                                    Membership
                                </a>
                            </Link>
                        </li>
                        <li className="footer__menu-item">
                            <Link href="/meetings/">
                                <a title="Meetings | Yankee Dahlia Society, New England">
                                    Meetings
                                </a>
                            </Link>
                        </li>
                        <li className="footer__menu-item">
                            <Link href="/tubers/">
                                <a title="Our Tubers | Yankee Dahlia Society, New England">
                                    Our Tubers
                                </a>
                            </Link>
                        </li>
                        <li className="footer__menu-item">
                            <Link href="/about/">
                                <a title="About Us | Yankee Dahlia Society, New England">
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
                    <div className="donation-form__wrapper">
                        <Donate />
                    </div>
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
