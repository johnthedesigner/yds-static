import Page from '../components/page'
import Hero from '../components/hero'
import Pingpong from '../components/pingpong'
import Bumper from '../components/bumper'
import pages from '../pages.json'
import styles from '../styles/Home.module.css'

export default function About() {
    return (
        <Page page={pages.about}>
            <div className={styles.about__body}>
                <Hero
                    title="About Yankee Dahlia Society"
                    image="/purple-flowers.jpg"
                />
                <Pingpong
                    side="left"
                    image="/misty-carol.jpg"
                    imageAlt="Misty and Carol, founders of Yankee Dahlia Society"
                >
                    <h3>Our Background</h3>
                    <p>
                        Hi, we’re Misty and Carol, two friends who met growing
                        dahlias. So, when two friends who love dahlias want to
                        make other new friends who also love dahlias, they start
                        a club!
                    </p>
                    <p>
                        We had a vision of creating a fun space where people who
                        love dahlias could gather and connect, in person and
                        through social media, to learn, have fun, and enjoy
                        growing dahlias together.
                    </p>
                </Pingpong>
                <Pingpong
                    side="right"
                    image="/garden.jpg"
                    imageAlt="A garden full of dahlias"
                >
                    <h3>Member of the American Dahlia Society</h3>
                    <p>
                        Yankee Dahlia Society is a proud member of the American
                        Dahlia Society. Since 1915 the American Dahlia Society
                        has been made up of local chapters around the United
                        States and Canada. Today over 70 clubs are affiliated
                        with ADS and their mission to stimulate interest while
                        promoting the culture and the development of the dahlia.
                        YDS looks forward to participating with ADS and the
                        dahlia club community to enrich and share our dahlia
                        knowledge and connect with growers across the country.
                        We encourage our members to also join ADS. Learn more
                        about ADS
                    </p>
                </Pingpong>
                <Bumper
                    text="Does this sound like fun do you too?"
                    buttonUrl="/membership"
                    buttonLabel="Find out more about YDS membership"
                />
            </div>
        </Page>
    )
}
