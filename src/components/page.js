import _ from 'lodash'
import Head from 'next/head'
import Link from 'next/link'

import pages from '../pages.json'
import { getUrl } from '../utils'
import Navbar from '../components/navbar'
import FooterLogo from '../public/logo-footer.svg'
import IconFB from '../public/icon-fb.svg'
import IconIG from '../public/icon-ig.svg'
import Donate from '../components/donate'

export default function Page(props) {
    let linkClass = (currentPath, linkedPage) => {
        return linkedPage.path === currentPath
            ? 'footer__link footer__link--active'
            : 'footer__link'
    }

    let Links = () => {
        return _.map(pages, (page) => {
            if (page.inFooter) {
                return (
                    <li className="footer__menu-item" key={page.path}>
                        <Link href={page.path}>
                            <a
                                className={linkClass(props.currentPath, page)}
                                title={page.title}
                            >
                                {page.label}
                            </a>
                        </Link>
                    </li>
                )
            } else {
                return null
            }
        })
    }

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
                <link
                    rel="canonical"
                    href={`https://yankeedahliasociety.com${props.page.path}`}
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
                        <Links />
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
