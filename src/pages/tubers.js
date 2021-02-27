import Page from '../components/page'
import Hero from '../components/hero'
import Pingpong from '../components/pingpong'
import Bumper from '../components/bumper'
import pages from '../pages.json'
import styles from '../styles/Tubers.module.css'

export default function Events() {
    return (
        <Page page={pages.tubers}>
            <div className={styles.tubers__body}>
                <Hero title="YDS Tubers" image="/dividing-dahlias.jpg" />
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
                <Bumper
                    text="Aenean elementum quis ante sit amet elementum."
                    buttonUrl="#"
                    buttonLabel="Click Me"
                />
            </div>
        </Page>
    )
}
