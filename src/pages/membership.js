import Link from 'next/link'
import Head from 'next/head'

import Page from '../components/page'
import pages from '../pages.js'
import Hero from '../components/hero'
import Pingpong from '../components/pingpong'
import Bumper from '../components/bumper'
import styles from '../styles/membership.module.css'

export default function Membership() {
    return (
        <Page page={pages.membership} backgroundClass="page__body--flower4">
            <Head>
                <meta
                    property="og:image"
                    key="og:image"
                    content="/android-chrome-512x512.png"
                />
            </Head>
            <div className={styles.home__body}>
                <Hero title="YDS Memberships" image="/flowers.jpg" />
                <Pingpong
                    side="left"
                    image="https://via.placeholder.com/900x1350"
                    ratioWidth="1"
                    ratioHeight="1.5"
                >
                    <h3>We want you! to join the Yankee Dahlia Society</h3>
                    <p>
                        We will have monthly emails, member meetings, garden
                        tours, presentations on all things dahlias and plenty of
                        learning at our growing partner gadens.
                    </p>
                    <p>
                        We would love to get to know you, so if you love dahlias
                        and love people and would enjoy spending time learning
                        and sharing knowledge about growing and showing dahlias
                        then join our club!
                    </p>
                    <a href="#" className="button">
                        Join YDS Today!
                    </a>
                </Pingpong>
                <Pingpong side="right" image="https://via.placeholder.com/900">
                    <h3>Come to a meeting!</h3>
                    <p>
                        We will have monthly emails, member meetings, garden
                        tours, presentations on all things dahlias and plenty of
                        learning at our growing partner gadens.
                    </p>
                    <Link href="/events">
                        <a className="button" title="Explore Meetings & Events">
                            Explore Meetings & Events
                        </a>
                    </Link>
                </Pingpong>
                <Bumper
                    text="Aenean elementum quis ante sit amet elementum."
                    buttonUrl="#"
                    buttonLabel="Click Me"
                />
            </div>
        </Page>
    )
}
