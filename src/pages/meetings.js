import { useState } from 'react'
import _ from 'lodash'
import moment from 'moment'

import Page from '../components/page'
import Hero from '../components/hero'
import Bumper from '../components/bumper'
import pages from '../pages.json'
// import events from '../components/eventsList'
import { events, eventTypes } from '../components/newEventsList'

const Event = (props) => {
    const [showMore, setShowMore] = useState(false)

    let colors = {
        blue: '#506F98',
        red: '#C65A60',
    }
    let eventLabelStyles = {
        background:
            props.label === eventTypes.meeting ? colors.blue : colors.red,
        display: 'inline-block',
        padding: '.5rem',
        fontSize: '.75rem',
        lineHeight: 1,
        height: '1.5rem',
        borderRadius: '.25rem',
        marginRight: 'auto',
        color: 'white',
    }
    let showMoreButtonStyles = {
        display: 'inline',
        background: 'none',
        border: 'none',
        color: '#C65A60',
        textAlign: 'left',
        marginRight: 'auto',
        padding: 0,
    }

    return (
        <div className="event">
            <h4 className="event__label" style={eventLabelStyles}>
                {props.label}
            </h4>
            <h3 className="event__date">
                {props.date} | {props.time}
            </h3>
            <h4 className="event__name">{props.name}</h4>
            <button
                className="show-more__button"
                style={showMoreButtonStyles}
                onClick={() => setShowMore(!showMore)}
            >
                {showMore ? 'Show Less' : 'Show More'}
            </button>
            <div
                className="show-more__content"
                style={{ display: showMore ? 'block' : 'none' }}
            >
                {_.map(props.showMore, (item, index) => {
                    return (
                        <div key={index}>
                            <h4>{item.name}</h4>
                            <item.content />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default function Events() {
    const [showPastEvents, setShowPastEvents] = useState(false)

    const displayedEvents = () => {
        let eventsToDisplay = []

        if (showPastEvents) {
            eventsToDisplay = [...events]
        } else {
            _.map(events, (event) => {
                if (moment().isBefore(moment(event.date).add(1, 'days'))) {
                    eventsToDisplay.push(event)
                }
            })
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
        if (
            (showPastEvents && type === 'all') ||
            (!showPastEvents && type === 'upcoming')
        ) {
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
            <Hero title="Meetings & Events" image="/colorful-arrangement.jpg" />
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
                    onClick={() => setShowPastEvents(false)}
                >
                    Upcoming Events
                </button>{' '}
                |{' '}
                <button
                    style={buttonStyles('all')}
                    onClick={() => setShowPastEvents(true)}
                >
                    All Events
                </button>
            </p>
            {_.map(displayedEvents(), (event, index) => {
                return (
                    <Event
                        {...event}
                        key={event.date + index}
                        date={moment(event.date).format('dddd, MMMM D, YYYY')}
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
