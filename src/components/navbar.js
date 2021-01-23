import _ from 'lodash'
import { useState } from 'react'

import pages, { getUrl } from '../pages'
import Hamburger from '../public/hamburger.svg'
import Logo from '../public/logo-mobile.svg'

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
                    <a
                        className={linkClass(props.currentUrl, page)}
                        href={page.url}
                        title={page.title}
                    >
                        {page.label}
                    </a>
                </li>
            )
        })
    }

    return (
        <div>
            <nav className="navbar--mobile">
                <a href={getUrl()} title="Yankee Dahlia Society | Home">
                    <Logo className="logo--mobile" />
                </a>
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
                <ul className="navbar__list--desktop">
                    <Links />
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
