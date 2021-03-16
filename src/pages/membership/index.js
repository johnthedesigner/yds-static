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
                        We are a dahlia club based in Wocester and Middlesex
                        county in Massachusetts and invite dahlia growers all
                        throughout the New England area. Our club is a proud
                        member of the American Dahlia Society, grateful that
                        they support research and education about our favorite
                        flower along with connecting and supporting dahlia clubs
                        and dahlia growers across the country and around the
                        world.
                    </p>
                    <p>
                        We would love to get to know you. Whether you are new to
                        growing dahlias or an experienced dahlia grower, Yankee
                        Dahlia Society has something for everyone. So if you
                        love dahlias and love people and would enjoy spending
                        time learning and sharing knowledge about growing and
                        showing dahlias then join our club!
                    </p>
                    <p>
                        We will have monthly emails, member meetings, garden
                        tours, presentations, and lots of opportunities for
                        hands-on learning about all things dahlias.
                    </p>
                    <Link href="/membership/join">
                        <a className="button">Join YDS Today!</a>
                    </Link>
                </Pingpong>
                <Pingpong side="right" image="/root-ball.jpg">
                    <h3>Visitors Welcome!</h3>
                    <p>
                        Are you interested in learning more about dahlias and
                        curious about joining a local dahlia club? We welcome
                        you to join us for your first two meetings before you
                        decide to take the plunge and join the club. Please
                        simply sign up so we know you are coming!
                    </p>
                    <Link href="/events">
                        <a className="button" title="Explore Meetings & Events">
                            Explore Meetings & Events
                        </a>
                    </Link>
                </Pingpong>
                <Bumper
                    text="It takes a village! Already a member and interested in lending an extra hand to the club?"
                    buttonUrl="/get-involved"
                    buttonLabel="How to Get More Involved"
                />
            </div>
        </Page>
    )
}
