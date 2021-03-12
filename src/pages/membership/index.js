import Link from 'next/link'
import Head from 'next/head'

import { getUrl } from '../../utils'
import Page from '../../components/page'
import pages from '../../pages.json'
import Hero from '../../components/hero'
import Pingpong from '../../components/pingpong'
import Bumper from '../../components/bumper'
import styles from '../../styles/membership.module.css'

export default function Membership() {
    return (
        <Page page={pages.membership} backgroundClass="page__body--flower4">
            <Head>
                <meta
                    property="og:image"
                    key="og:image"
                    content={getUrl('/android-chrome-512x512.png')}
                />
            </Head>
            <div className={styles.home__body}>
                <Hero title="Memberships" image="/flowers.jpg" />
                <Pingpong
                    side="left"
                    image="/digging-tubers.jpg"
                    ratioWidth="1"
                    ratioHeight="1"
                >
                    <h3>
                        <b>We want you!</b> for Yankee Dahlia Society
                    </h3>
                    <p>
                        If you love dahlias, and love people who love dahlias,
                        become part of Yankee Dahlia Society! We provide a fun,
                        welcoming space for everyone to learn and to share
                        knowledge about growing and enjoying dahlias.
                    </p>
                    <p>
                        Whether you are new to growing dahlias or an experienced
                        dahlia grower, Yankee Dahlia Society has something for
                        everyone. Our membership year will open on August 1,
                        2021. Until then, we invite everyone to freely
                        participate in all of our activities! We will have
                        monthly meetings and email newsletters to keep in touch
                        with you, garden tours, presentations, and plenty of
                        opportunities for hands-on learning in our society’s
                        growing partner gardens. We’d love to get to know you.
                        Join us!
                    </p>
                    <Link href="/membership/join">
                        <a className="button">Join YDS Today!</a>
                    </Link>
                </Pingpong>
                <Pingpong side="right" image="/root-ball.jpg">
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
            </div>
        </Page>
    )
}
