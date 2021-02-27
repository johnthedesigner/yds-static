import Page from '../components/page'
import Hero from '../components/hero'
import ImageList from '../components/imageList'
import Bumper from '../components/bumper'
import pages from '../pages.json'
import styles from '../styles/Events.module.css'

export default function Events() {
    return (
        <Page page={pages.events}>
            <div className={styles.events__body}>
                <Hero title="Meetings & Events" image="/garden.jpg" />
                <ImageList image="https://via.placeholder.com/600">
                    <h4>March 28, 2021</h4>
                    <h3>Our First Meeting</h3>
                    <p>
                        Nunc efficitur arcu non malesuada placerat. Vivamus a
                        pharetra lectus. Aenean elementum quis ante sit amet
                        elementum. In at enim id leo vulputate semper in eu
                        nunc. Donec suscipit nibh a hendrerit mollis.
                    </p>
                </ImageList>
                <ImageList image="https://via.placeholder.com/600">
                    <h4>April 25, 2021</h4>
                    <h3>Lorem ipsum dolor</h3>
                    <p>
                        Nunc efficitur arcu non malesuada placerat. Vivamus a
                        pharetra lectus. Aenean elementum quis ante sit amet
                        elementum. In at enim id leo vulputate semper in eu
                        nunc. Donec suscipit nibh a hendrerit mollis.
                    </p>
                </ImageList>
                <Bumper
                    text="Become a member to get updates about our tuber sales and swaps"
                    buttonUrl="#"
                    buttonLabel="Learn About Memberships"
                />
            </div>
        </Page>
    )
}
