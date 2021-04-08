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
                time="11:00 am – 1:00 pm"
                name="Talking Dahlias with Paula from Garden Bee Flower Farm"
                description={() => {
                    return (
                        <span>
                            <p>
                                Y.D.S is thrilled to have Paula Fisher from{' '}
                                <a
                                    href="#"
                                    target="_blank"
                                    title="Garden Bee Flower Farm Website"
                                >
                                    {' '}
                                    Garden Bee Flower Farm
                                </a>
                                , located in the Piedmont Triad of North
                                Carolina. Paula’s background includes
                                volunteering as a master gardener since 2015.
                                Her flower farming started six years ago with
                                four 100-foot beds on her newly purchased
                                property. After attending a flower farming
                                workshop she jumped right into the role and
                                since then her business has expanded to 10 times
                                that original bed space.
                            </p>
                            <p>
                                Dahlias have taken the lead in what Paula really
                                loves to grow and that has motivated her to grow
                                over 200 varieties. The farm encompasses one
                                acre of seasonal flowers and dahlias and
                                produces 500-1000 dahlias weekly to a large
                                floral industry wholesaler. She enjoys taking
                                notes on the varieties she grows to evaluate
                                which ones grow well in hot humid conditions.
                            </p>
                            <p>
                                Paula is also a member of the American Dahlia
                                Society and her local chapter, Carolinas Dahlia
                                Society in NC. She awaits the day for shows to
                                resume and looks forward to showing dahlias.
                                Paula will take us through her journey as a
                                flower farmer, dahlia grower and enthusiast
                                sharing a seasonal overview, some background
                                behind the business and tips about growing
                                dahlias from seed, cuttings and tubers. You
                                don’t want to miss this opportunity to meet with
                                Paula and join us for our first club meeting.
                            </p>
                            <p>
                                (Please log in at 10:45 to say hello and get
                                settled. Meeting will start promptly at 11:00am)
                            </p>
                        </span>
                    )
                }}
                location={() => {
                    return (
                        <span>
                            Virtual Meeting (Zoom meeting info will be emailed
                            to members)
                        </span>
                    )
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
