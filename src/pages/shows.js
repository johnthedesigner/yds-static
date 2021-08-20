import { useState } from 'react'
import _ from 'lodash'
import Link from 'next/link'
import moment from 'moment'

import Page from '../components/page'
import Hero from '../components/hero'
import Bumper from '../components/bumper'
import pages from '../pages.json'
import shows from '../components/showsList'

const formatDate = (date) => {
    return moment(date).format('dddd, MMMM D, YYYY')
}

const Date = (props) => {
    if (props.startDate && props.endDate) {
        return (
            <h4 className="event__date">
                {formatDate(props.startDate)} – {formatDate(props.endDate)}
            </h4>
        )
    } else if (props.startDate) {
        return <h4 className="event__date">{formatDate(props.startDate)}</h4>
    } else {
        return null
    }
}

const File = (props) => {
    if (props.file) {
        return (
            <div className="event__link">
                <a href={props.file}>Download PDF Brochure</a>
            </div>
        )
    } else {
        return null
    }
}

const Show = (props) => {
    const Description = props.description
    const Location = props.location

    return (
        <div className="event">
            <Date startDate={props.startDate} endDate={props.endDate} />
            <h3 className="event__name">{props.name}</h3>
            <div className="event__location">Organization: {props.org}</div>
            <div className="event__location">Location: {props.location}</div>
            <div className="event__link">
                <Link href={props.link}>
                    <a target="_blank">{props.link}</a>
                </Link>
            </div>
            <br />
            <File file={props.file} />
        </div>
    )
}

export default function Shows() {
    const [showsType, setShowsType] = useState('upcoming')

    const displayedShows = () => {
        let showsToDisplay = []

        if (showsType == 'upcoming') {
            _.map(shows, (show) => {
                if (moment().isBefore(moment(show.date).add(1, 'days'))) {
                    showsToDisplay.push(show)
                }
            })
        } else if (showsType == 'all') {
            showsToDisplay = [...shows]
        }

        return showsToDisplay
    }

    let buttonStyles = (type) => {
        let defaultStyles = {
            border: 'none',
            background: 'none',
            fontFamily: 'inherit',
            fontSize: 'inherit',
        }
        if (type == showsType) {
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
        <Page page={pages.shows}>
            <Hero title="Dahlia Shows" image="/colorful-arrangement.jpg" />
            <Bumper text="Join us at one of these Dahlia shows to see beautiful blooms and maybe even enter some blooms of your own!" />
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
                    onClick={() => setShowsType('upcoming')}
                >
                    Upcoming Dahlia Shows
                </button>{' '}
                |{' '}
                <button
                    style={buttonStyles('all')}
                    onClick={() => setShowsType('all')}
                >
                    All Dahlia Shows
                </button>
            </p>
            {_.map(displayedShows(), (show, index) => {
                return (
                    <Show
                        key={index}
                        startDate={show.startDate}
                        endDate={show.endDate}
                        name={show.name}
                        link={show.link}
                        location={show.location}
                        org={show.org}
                        file={show.file}
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
