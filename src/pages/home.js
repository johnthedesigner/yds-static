import Link from 'next/link'
import Page from '../components/page'
import pages from '../pages.json'
import Hero from '../components/hero'
import Pingpong from '../components/pingpong'
import Bumper from '../components/bumper'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <Page page={pages.home}>
            <div className={`page--home ${styles.home__body}`}>
                <Hero
                    title="Yankee Dahlia Society"
                    image="/bucket.jpg"
                    overlay="false"
                    height="40vh"
                />
                <Pingpong
                    side="left"
                    image="planting-dahlias.jpg"
                    ratioWidth={1}
                    ratioHeight={1.5}
                >
                    <h3>
                        <b>We want you!</b> for Yankee Dahlia Society!
                    </h3>
                    <p>
                        YDS Memberships are available today for both individual
                        and business members. Register soon to attend our first
                        meeting!
                    </p>
                    <Link href="/membership">
                        <a className="button">Find out more</a>
                    </Link>
                    <h3>Come to a Meeting</h3>
                    <p>
                        Spring is just around the corner and we'll be having our
                        first meetings soon.
                    </p>
                    <Link href="/meetings">
                        <a className="button">Meeting Calendar</a>
                    </Link>
                </Pingpong>
                <Bumper
                    text="Already a member and looking for ways to lend a hand within Yankee Dahlia Society?"
                    buttonUrl="/get-involved"
                    buttonLabel="More Ways to Get Involved"
                />
            </div>
        </Page>
    )
}
