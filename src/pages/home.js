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
                    title="The Yankee Dahlia Society"
                    image="/bucket.jpg"
                    overlay="false"
                    height="40vh"
                />
                <Pingpong side="left" image="https://via.placeholder.com/900">
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
                </Pingpong>
                <Bumper
                    text="Looking for our upcoming meetings & events?"
                    buttonUrl="/events"
                    buttonLabel="Show me"
                />
            </div>
        </Page>
    )
}
