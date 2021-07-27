import _, { update } from 'lodash'
import { useEffect, useState } from 'react'
import Link from 'next/link'

import pages from '../pages.json'
import { getUrl, getCart, updateLineItems } from '../utils'
import Hamburger from '../public/hamburger.svg'
import LogoMobile from '../public/logo-mobile.svg'
import LogoDesktop from '../public/logo-desktop.svg'
import CartIcon from '../public/cart.svg'

export const linkClass = (currentPath, linkedPage) => {
    return linkedPage.path === currentPath
        ? 'navbar__link navbar__link--active'
        : 'navbar__link'
}

const Navbar = (props) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [cartOpen, setCartOpen] = useState(true)
    const [cart, setCart] = useState({ id: '', webUrl: '' })
    const [cartUrl, setCartUrl] = useState('')

    const updateQuantity = (cart, id, quantity) => {
        updateLineItems(
            _.map(cart.lineItems, (item) => {
                let currentItem = { id: item.id, quantity: item.quantity }
                if (currentItem.id === id) currentItem.quantity = quantity
                return currentItem
            })
        )
    }

    useEffect(() => {
        let updateCart = async () => {
            let openCart = await getCart()
            console.log('openCart: ', openCart)
            setCart(openCart)
            setCartUrl(openCart.webUrl)
        }

        updateCart()

        window.addEventListener('storage', updateCart)

        return () => {
            window.removeEventListener('storage', updateCart)
        }
    }, [cart.id])

    let cartOverlayStyles = {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        width: '25%',
        minWidth: '300px',
        background: 'white',
        boxShadow: '0 0 10px rgba(0,0,0,.4)',
        zIndex: 100,
    }

    let Links = () => {
        let navItems = _.map(pages, (page) => {
            if (page.inMenu) {
                return (
                    <li className="navbar__item" key={page.path}>
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
        return [
            ...navItems,
            <li key="cart">
                <span className="cart__button">
                    <CartIcon onClick={() => setCartOpen(!cartOpen)} />
                </span>
            </li>,
        ]
    }

    return (
        <div>
            <nav className="navbar--mobile">
                <Link href={getUrl(pages.home.path)}>
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
                <Link href={getUrl(pages.home.path)}>
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
                <span
                    style={{
                        fontFamily: 'sans-serif',
                        fontSize: '.5rem',
                        color: 'red',
                        zIndex: '1000',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                    }}
                ></span>
            </nav>
            <div
                className="cart__overlay"
                style={{
                    ...cartOverlayStyles,
                    pointerEvents: cartOpen ? 'all' : 'none',
                    opacity: cartOpen ? 1 : 0,
                }}
            >
                <h3>My Cart</h3>
                <button onClick={() => setCartOpen(false)}>Close Cart</button>
                <ul>
                    {_.map(cart.lineItems, (item) => {
                        return (
                            <li key={item.id}>
                                <Link
                                    href={`/products/${item.variant.product.handle}`}
                                >
                                    <a>{item.title}</a>
                                </Link>
                                <button
                                    disabled={
                                        item.quantity >=
                                        item.variant.quantityAvailable
                                    }
                                    onClick={() =>
                                        updateQuantity(
                                            cart,
                                            item.id,
                                            item.quantity - 1
                                        )
                                    }
                                >
                                    -
                                </button>
                                {item.quantity}
                                <button
                                    onClick={() =>
                                        updateQuantity(
                                            cart,
                                            item.id,
                                            item.quantity + 1
                                        )
                                    }
                                >
                                    +
                                </button>
                            </li>
                        )
                    })}
                </ul>
                <a href={cartUrl}>Check Out</a>
            </div>
        </div>
    )
}

export default Navbar
