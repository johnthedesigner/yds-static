import Link from 'next/link'
import moment from 'moment'

import Page from '../components/page'
import Hero from '../components/hero'
import Bumper from '../components/bumper'
import { CompactTextWrapper, CompactText } from '../components/compactText'
import pages from '../pages.json'
import bizmembers from '../bizmembers.json'
import _ from 'lodash'
import IgIcon from '../public/ig.svg'
import FbIcon from '../public/fb.svg'
import WebsiteIcon from '../public/website.svg'

export default function BusinessMembers() {
    const sortedBizMembers = _.orderBy(bizmembers, 'business name')

    const memberBlockStyles = {
        marginBottom: '1rem',
    }

    const memberDetailsStyles = {
        margin: '0.5rem',
        fontSize: '1.25rem',
    }

    const Location = (props) => {
        if (props.city && props.state) {
            return (
                <p style={memberDetailsStyles}>
                    {props.city}, {props.state}
                </p>
            )
        } else if (!props.city && props.state) {
            return <p style={memberDetailsStyles}>{props.state}</p>
        } else {
            return null
        }
    }

    const MemberSince = (props) => {
        let membershipDate = moment(props.date)
        if (props.date) {
            return (
                <p style={memberDetailsStyles}>
                    Member since {membershipDate.format('MMMM YYYY')}
                </p>
            )
        } else {
            return null
        }
    }

    const WebsiteLink = (props) => {
        if (props.link) {
            return (
                <span>
                    <Link href={props.link}>
                        <a target="_blank">
                            <WebsiteIcon />
                        </a>
                    </Link>
                </span>
            )
        } else {
            return null
        }
    }

    const FacebookLink = (props) => {
        if (props.link) {
            return (
                <span>
                    <Link href={props.link}>
                        <a target="_blank">
                            <FbIcon />
                        </a>
                    </Link>
                </span>
            )
        } else {
            return null
        }
    }

    const InstagramLink = (props) => {
        if (props.handle) {
            return (
                <span>
                    <Link href={`http://instagram.com/${props.handle}`}>
                        <a target="_blank">
                            <IgIcon />
                        </a>
                    </Link>
                </span>
            )
        } else {
            return null
        }
    }

    return (
        <Page page={pages.businessMembers}>
            <Hero title="Member Businesses" image="/garden.jpg" />
            <CompactTextWrapper>
                {_.map(sortedBizMembers, (member, index) => {
                    return (
                        <CompactText key={index}>
                            <div
                                style={{
                                    textAlign: 'center',
                                    marginBottom: '2rem',
                                }}
                            >
                                <h3 style={{ margin: '0.5rem 0' }}>
                                    {member['business name']}
                                </h3>
                                <Location
                                    city={member.city}
                                    state={member.state}
                                />
                                <MemberSince date={member['member since']} />
                                <p style={memberDetailsStyles}>
                                    <WebsiteLink
                                        link={member['business url']}
                                    />
                                    <FacebookLink
                                        link={member['facebook url']}
                                    />
                                    <InstagramLink
                                        handle={member['ig handle']}
                                    />
                                </p>
                            </div>
                        </CompactText>
                    )
                })}
                <Bumper
                    text="Reach out to inquire about opportunities to get involved"
                    buttonUrl="/contact"
                    buttonLabel="Get in Touch"
                />
            </CompactTextWrapper>
        </Page>
    )
}
