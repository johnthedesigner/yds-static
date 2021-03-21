import Link from 'next/link'

import Page from '../components/page'
import Hero from '../components/hero'
import Bumper from '../components/bumper'
import pages from '../pages.json'

const Event = (props) => {
    const Description = props.description
    const Location = props.location

    return (
        <div className="event">
            <h4 className="event__date">
                {props.date} | {props.time}
            </h4>
            <h3 className="event__name">{props.name}</h3>
            <p className="event__description">
                <b>Description: </b>
                <Description />
            </p>
            <p className="event__location">
                <b>Location: </b> <Location />
            </p>
        </div>
    )
}

export default function Events() {
    return (
        <Page page={pages.meetings}>
            <Hero title="Meetings" image="/colorful-arrangement.jpg" />
            <Bumper text="Club meetings will typically be held on the 1st Sunday of the month.  During the dahlia blooming season we will hold a few extra events." />
            <Event
                date="Sunday, April 11, 2021"
                time="Time TBD"
                name="April Zoom Meeting"
                description={() => {
                    return (
                        <span>
                            Our first meeting. Dahlia Q&A, a chance to get to
                            meet each other and talk about cuttings.
                        </span>
                    )
                }}
                location={() => {
                    return <span>Virtual Meeting (Zoom)</span>
                }}
            />
            <Event
                date="Sunday, May 30, 2021"
                time="Time TBD"
                name="Our First In-Person Meeting!"
                description={() => {
                    return (
                        <span>
                            Our very first in-person meeting is scheduled on
                            Sunday, May 30, 2021 at{' '}
                            <Link href="https://www.maplebrookfarmstead.com/">
                                <a
                                    target="_blank"
                                    title="Mapblebrook Farmstead"
                                >
                                    Maplebrook Farmstead
                                </a>
                            </Link>{' '}
                            in Sterling, MA. What better way to spend your
                            memorial weekend than joining us for our first ever
                            in-person club meeting! Bring your dahlia enthusiasm
                            and join us for some fun at the farm. We will be
                            planting tubers and sharing tips to make your
                            growing season a success. Come see the farm as we
                            kick off the growing season and meet our growing
                            partners and members. We will come back in October
                            to see what the farm looks like in full bloom.
                        </span>
                    )
                }}
                location={() => {
                    return (
                        <span>
                            <Link href="https://www.maplebrookfarmstead.com/">
                                <a title="Maplebrook Farmstead" target="_blank">
                                    Maplebrook Farmstead
                                </a>
                            </Link>
                            , 155 Tuttle Road, Sterling, MA 01564
                        </span>
                    )
                }}
            />
            <Event
                date="Sunday, June 6, 2021"
                time="Time TBD"
                name="June Meeting"
                description={() => {
                    return <span>Agenda TBD</span>
                }}
                location={() => {
                    return <span>Location TBD</span>
                }}
            />
            <Event
                date="Saturday, July 3, 2021"
                time="Time TBD"
                name="Club BBQ & How to stake and water dahlias"
                description={() => {
                    return <span>Agenda TBD</span>
                }}
                location={() => {
                    return <span>Member's Home (TBD)</span>
                }}
            />
            <Bumper
                text="Become a member to attend meetings & events and much more!"
                buttonUrl="/membership"
                buttonLabel="Learn About Memberships"
            />
        </Page>
    )
}
