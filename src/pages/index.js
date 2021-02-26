import Link from 'next/link'

import Page from '../components/page'
import pages from '../pages.js'
import Hero from '../components/hero'
import Pingpong from '../components/pingpong'
import Bumper from '../components/bumper'
import styles from '../styles/Home.module.css'
import IconFB from '../public/icon-fb.svg'
import IconIG from '../public/icon-ig.svg'

export default function Home() {
    return (
        <div className={`page--home ${styles.home__body}`}>
            <Hero
                title="Yankee Dahlia Society"
                image="/bucket.jpg"
                overlay="false"
                height="40vh"
            />
            <div className="bumper">
                <h3>Website under construction. Stay tuned.</h3>
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
