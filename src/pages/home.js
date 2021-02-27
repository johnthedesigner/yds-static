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
                    <h3>Lorem Ipsum Dolor Sit Amet.</h3>
                    <p>
                        Nunc efficitur arcu non malesuada placerat. Vivamus a
                        pharetra lectus. Aenean elementum quis ante sit amet
                        elementum. In at enim id leo vulputate semper in eu
                        nunc. Donec suscipit nibh a hendrerit mollis.
                    </p>
                    <a href="#" className="button">
                        Click me
                    </a>
                </Pingpong>
                <Pingpong side="right" image="https://via.placeholder.com/900">
                    <h3>Lorem Ipsum Dolor Sit Amet.</h3>
                    <p>
                        Nunc efficitur arcu non malesuada placerat. Vivamus a
                        pharetra lectus. Aenean elementum quis ante sit amet
                        elementum. In at enim id leo vulputate semper in eu
                        nunc. Donec suscipit nibh a hendrerit mollis.
                    </p>
                    <a href="#" className="button">
                        Click me
                    </a>
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
