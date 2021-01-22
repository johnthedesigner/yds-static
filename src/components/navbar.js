import _ from 'lodash'

import pages from '../pages'

export const linkClass = (currentURL, linkedPage) => linkedPage.url === currentURL ? "navbar__link navbar__link--active" : "navbar__link"
  
const Navbar = (props) => {
    let Links = () => {
        return _.map(pages, page => {
        return(
            <li className="navbar__item" key={page.url}>
                <a className={linkClass(props.currentUrl, page)} href={page.url} title={page.title}>{page.label}</a>
            </li>
        )
        })
    }

    return(
        <nav className="navbar">
        <ul className="navbar__list">
            <Links/>
        </ul>
        </nav>
    )
}

export default Navbar;
  