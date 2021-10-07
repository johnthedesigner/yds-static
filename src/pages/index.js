import Link from 'next/link'
import Head from 'next/head'
import _ from 'lodash'
import moment from 'moment'

import Page from '../components/page'
import pages from '../pages.json'
import Hero from '../components/hero'
import Pingpong from '../components/pingpong'
import Bumper from '../components/bumper'
import styles from '../styles/Home.module.css'
import events from '../components/eventsList'

const upcomingEvents = []
_.map(events, (event) => {
    if (moment().isBefore(moment(event.date).add(1, 'days'))) {
        upcomingEvents.push(event)
    }
})

const EventBlock = (props) => {
    if (props.event) {
        return (
            <>
                <h3>
                    Save the Date:{' '}
                    {moment(props.event.date).format('dddd, MMMM D, YYYY')}
                </h3>
                <p>{props.event.name}</p>
                <p>
                    Be sure to mark your calendar to join us for our next
                    meeting.
                </p>
                <Link href="/meetings">
                    <a
                        className="button"
                        title="Yankee Dahlia Society Meeting Calendar"
                    >
                        Meeting Calendar
                    </a>
                </Link>
            </>
        )
    } else {
        return null
    }
}

export default function Home() {
    return (
        <Page page={pages.home}>
            <div className={`page--home ${styles.home__body}`}>
                <Hero
                    title="Yankee Dahlia Society"
                    image="/purple-flowers.jpg"
                    overlay="false"
                    height="40vh"
                />
                <Pingpong
                    side="left"
                    image="planting-dahlias.jpg"
                    imageAlt="A garden with rows of dahlias being planted"
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
                        <a
                            className="button"
                            title="Find out more about YDS memberships"
                        >
                            Find out more
                        </a>
                    </Link>
                    <EventBlock event={upcomingEvents[0]} />
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
