import _ from 'lodash'
import { useState } from 'react'
import Link from 'next/link'

import pages from '../pages'
import Hamburger from '../public/hamburger.svg'
import LogoMobile from '../public/logo-mobile.svg'
import LogoDesktop from '../public/logo-desktop.svg'

export const linkClass = (currentURL, linkedPage) =>
    linkedPage.url === currentURL
        ? 'navbar__link navbar__link--active'
        : 'navbar__link'

const Navbar = (props) => {
    const [menuOpen, setMenuOpen] = useState(false)

    let Links = () => {
        return _.map(pages, (page) => {
            return (
                <li className="navbar__item" key={page.url}>
                    <Link href={page.url}>
                        <a
                            className={linkClass(props.currentUrl, page)}
                            title={page.title}
                        >
                            {page.label}
                        </a>
                    </Link>
                </li>
            )
        })
    }

    return (
        <div>
            <nav className="navbar--mobile">
                <Link href={pages.home.url}>
                    <a
                        title="Yankee Dahlia Society | Home"
                        className="logo-link--mobile"
                    >
                        <LogoMobile className="logo--mobile" />
                    </a>
                </Link>
                <div className="menu__button">
                    <Hamburger onClick={() => setMenuOpen(!menuOpen)} />
                </div>
                <div
                    className="navbar__list-container--mobile"
                    style={{
                        pointerEvents: menuOpen ? 'all' : 'none',
                        opacity: menuOpen ? 1 : 0,
                    }}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <ul className="navbar__list--mobile">
                        <Links />
                    </ul>
                </div>
            </nav>
            <nav className="navbar--desktop">
                <Link href={pages.home.url}>
                    <a
                        title="Yankee Dahlia Society | Home"
                        className="logo-link--desktop"
                    >
                        <LogoDesktop className="logo--desktop" />
                    </a>
                </Link>
                <ul className="navbar__list--desktop">
                    <Links />
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
