import _ from 'lodash'

import Navbar from '../components/navbar'
import { getUrl } from '../pages'
import Logo from '../public/logo-vertical.svg'
import IconFB from '../public/icon-fb.svg'
import IconIG from '../public/icon-ig.svg'

export default function Page(props) {
    return (
        <div className="page">
            <div className="page__sidebar">
                <div className="sidebar__top">
                    <a href={getUrl()} title="Yankee Dahlia Society | Home">
                        <Logo />
                    </a>
                </div>
                <div className="sidebar__bottom">
                    <a
                        href="https://www.facebook.com/YankeeDahliaSociety/"
                        title="Yankee Dahlia Society on Facebook"
                        target="_blank"
                    >
                        <IconFB className="social-icon" />
                    </a>
                    <a
                        href="https://www.instagram.com/yankeedahliasociety/"
                        title="Yankee Dahlia Society on Instagram"
                        target="_blank"
                    >
                        <IconIG className="social-icon" />
                    </a>
                </div>
            </div>
            <main className="page__body">
                <Navbar currentUrl={props.currentUrl} />
                {props.children}
            </main>
        </div>
    )
}
