import Link from 'next/link'

import Hero from '../components/hero'
import styles from '../styles/Home.module.css'
import IconFB from '../public/icon-fb.svg'
import IconIG from '../public/icon-ig.svg'

export default function Home() {
    return (
        <div className={`page--home ${styles.home__body}`}>
            <Hero
                title="Yankee Dahlia Society"
                image="/purple-flowers.jpg"
                overlay="false"
                height="40vh"
            />
            <div className="bumper">
                <h3>YankeeDahliaSocity.com launches Sunday March 21, 2021!</h3>
                <h3>
                    Celebrate spring and the opening of our 2021 member
                    registration.
                </h3>
                <h3>
                    Become a member just in time for our very first meeting on
                    April 11, 2021
                </h3>
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
            </div>
        </div>
    )
}
