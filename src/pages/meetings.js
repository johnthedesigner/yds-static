import { useState } from 'react'
import _ from 'lodash'
import Link from 'next/link'
import moment from 'moment'

import Page from '../components/page'
import Hero from '../components/hero'
import Bumper from '../components/bumper'
import pages from '../pages.json'
import events from '../components/eventsList'

const Event = (props) => {
    const Description = props.description
    const Location = props.location

    return (
        <div className="event">
            <h4 className="event__date">
                {props.date} | {props.time}
            </h4>
            <h3 className="event__name">{props.name}</h3>
            <div className="event__description">
                <Description />
            </div>
            <div className="event__location">
                <b>Location: </b> <Location />
            </div>
        </div>
    )
}

export default function Events() {
    const [eventsType, setEventsType] = useState('upcoming')

    const displayedEvents = () => {
        let today = moment('YYYYMMDD')

        let eventsToDisplay = []

        if (eventsType == 'upcoming') {
            _.map(events, (event) => {
                if (moment().isBefore(moment(event.date).add(1, 'days'))) {
                    eventsToDisplay.push(event)
                }
            })
        } else if (eventsType == 'all') {
            eventsToDisplay = [...events]
        }

        return eventsToDisplay
    }

    let buttonStyles = (type) => {
        let defaultStyles = {
            border: 'none',
            background: 'none',
            fontFamily: 'inherit',
            fontSize: 'inherit',
        }
        if (type == eventsType) {
            return {
                ...defaultStyles,
                color: '#3d4549',
            }
        } else {
            return {
                ...defaultStyles,
                color: '#BBB',
                cursor: 'pointer',
            }
        }
    }

    return (
        <Page page={pages.meetings}>
            <Hero title="Meetings" image="/colorful-arrangement.jpg" />
            <Bumper text="Club meetings will typically be held on the 1st Sunday of the month.  During the dahlia blooming season we will hold a few extra events." />
            <p
                style={{
                    width: '60rem',
                    maxWidth: '90%',
                    margin: '0 auto',
                    textAlign: 'right',
                }}
            >
                Showing:{' '}
                <button
                    style={buttonStyles('upcoming')}
                    onClick={() => setEventsType('upcoming')}
                >
                    Upcoming Events
                </button>{' '}
                |{' '}
                <button
                    style={buttonStyles('all')}
                    onClick={() => setEventsType('all')}
                >
                    All Events
                </button>
            </p>
            {_.map(displayedEvents(), (event) => {
                return (
                    <Event
                        date={moment(event.date).format('dddd, MMMM D, YYYY')}
                        time={event.time}
                        name={event.name}
                        description={event.description}
                        location={event.location}
                    />
                )
            })}
            <Bumper
                text="Become a member to attend meetings & events and much more!"
                buttonUrl="/membership"
                buttonLabel="Learn About Memberships"
            />
        </Page>
    )
}
