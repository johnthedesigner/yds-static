import Page from '../components/page'
import Hero from '../components/hero'
import Pingpong from '../components/pingpong'
import Bumper from '../components/bumper'
import pages from '../pages.js'
import styles from '../styles/Home.module.css'

export default function About() {
    return (
        <Page page={pages.about}>
            <div className={styles.about__body}>
                <Hero title="About YDS" image="/garden-2.jpg" />
                <Pingpong side="left" image="https://via.placeholder.com/900">
                    <p>
                        Hi, we’re Misty and Carol, two friends who met growing
                        dahlias. So, when two friends who love dahlias want to
                        make other new friends who also love dahlias, they start
                        a club!
                    </p>
                </Pingpong>
                <Pingpong side="right" image="https://via.placeholder.com/900">
                    <p>
                        We had a vision of creating a fun space where people who
                        love dahlias could gather and connect, in person and
                        through social media, to learn, have fun, and enjoy
                        growing dahlias together.
                    </p>
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
