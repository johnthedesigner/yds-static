import Link from 'next/link'

import Page from '../../components/page'
import Hero from '../../components/hero'
import ImageList from '../../components/imageList'
import Bumper from '../../components/bumper'
import pages from '../../pages.json'
import styles from '../../styles/Events.module.css'

export default function Events() {
    return (
        <Page page={pages.events}>
            <div className={styles.events__body}>
                <Hero title="Meetings & Events" image="/garden.jpg" />
                <Bumper text="Club meetings will typically be held on the 1st Sunday of the month.  During the dahlia blooming season we will hold a few extra events." />
                <ImageList image="https://via.placeholder.com/600">
                    <h4>May 30, 2021</h4>
                    <h3>Our First Meeting!</h3>
                    <p>
                        <b>Description: </b>Our very first in person meeting is
                        scheduled on Sunday, May 30, 2021 at Maple Brook
                        Farmstead in Sterling, MA. What a better way to spend
                        your memorial weekend than joining us for the first ever
                        in person club meeting! Bring your dahlia enthusiasm and
                        join us for some fun at the farm. We will be planting
                        tubers and sharting tips to make your growing season a
                        success. Come see the farm as we kick off the growing
                        season and meet our growing partners and members. We
                        will come back in October to see what the farm looks
                        like in full bloom.
                    </p>
                    <p>
                        <b>Location: </b> Maple Brook Farmstead, 155 Tuttle
                        Road, Sterling, MA 01564
                    </p>
                </ImageList>
                <ImageList image="https://via.placeholder.com/600">
                    <h4>June 6, 2021</h4>
                    <h3>June Meeting</h3>
                    <p>
                        <b>Description: </b>Agenda TBD
                    </p>
                    <p>
                        <b>Location: </b> Wright Locke Farm, Winchester, MA
                    </p>
                </ImageList>
                <ImageList image="https://via.placeholder.com/600">
                    <h4>July 3, 2021</h4>
                    <h3>Club BBQ & How to stake and water dahlias</h3>
                    <p>
                        <b>Description: </b>Agenda TBD
                    </p>
                    <p>
                        <b>Location: </b> Member's Home (TBD)
                    </p>
                </ImageList>
                <Bumper
                    text="Discover more ways to participate in YDS events."
                    buttonUrl="/events/get-involved"
                    buttonLabel="Get Involved"
                />
                <Bumper
                    text="Become a member to attend meetings & events"
                    buttonUrl="/membership"
                    buttonLabel="Learn About Memberships"
                />
            </div>
        </Page>
    )
}
