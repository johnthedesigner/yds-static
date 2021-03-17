import Link from 'next/link'

import Page from '../components/page'
import Hero from '../components/hero'
import Bumper from '../components/bumper'
import { CompactTextWrapper, CompactText } from '../components/compactText'
import pages from '../pages.json'

export default function Events() {
    return (
        <Page page={pages.getInvolved}>
            <Hero
                title="Get Involved in Yankee Dahlia Society"
                image="/garden.jpg"
            />
            <Bumper
                text="Want to get more involved in Y.D.S.? Get in touch, we'd love to talk about opportunities to help with meetings, newsletters, garden tours and more"
                smallText="Time is our most valued asset.  We appreciate any amount of time you can contribute because running a successful club takes many hands, especially when it’s a brand new club.  If you would like to be at the forefront of making this club happen as a contributing member we welcome the assistance and expertise you can share.  Please see below ways to get involved.  Reach out to us via email (link to contact page) if you have any special skills or ideas on ways you can get involved."
                buttonUrl="/contact"
                buttonLabel="Get in Touch"
            />
            <CompactTextWrapper>
                <CompactText>
                    <h3>Speakers Wanted</h3>
                    <p>
                        Over the years what is interesting as we expand and
                        share our knowledge and experience is that every grower
                        has a slightly different technique to staking their
                        plants and storing their tubers.
                    </p>
                </CompactText>
                <CompactText>
                    <h3>Garden Tours Wanted</h3>
                    <p>
                        We would love to see your garden in person or even
                        virtually. If you are local we would love to arrange a
                        safe outdoor socially distant experience or even a
                        pre-recorded tour. For those across the world we would
                        love to try a live or pre-recorded virtual tour.
                    </p>
                </CompactText>
                <CompactText>
                    <h3>Extra Set of Hands</h3>
                    <p>
                        Would you have a little extra time you can spare and
                        would like to help the to help the club at one of our
                        Growing Partner Locations (Maplebrook Farm in Sterling,
                        MA or at Wright Locke Farm in Winchester, MA).
                        Seasonally we could use some help with tasks to plant
                        tubers, stake growing plants, dig tubers or divide
                        tubers. Please reach out to let us know that you would
                        like to help.
                    </p>
                </CompactText>
                <CompactText>
                    <h3>Do you like to write articles?</h3>
                    <p>
                        Would you have extra time to put together articles to be
                        included in our Monthly Emails. Possibly you would like
                        to work with other sand write a column in our monthly
                        newsletters. Ideas include:
                        <ul>
                            <li>American Dahlia Society Quarterly Bulletins</li>
                            <li>
                                Content Ideas for the Monthly Newsletter:
                                <ul>
                                    <li>Ask The Expert</li>
                                    <li>Feature a YDS Member</li>
                                    <li>Seasonal Tips</li>
                                    <li>Meeting Recaps</li>
                                </ul>
                            </li>
                        </ul>
                    </p>
                </CompactText>
                <CompactText>
                    <h3>Become a Growing Partner</h3>
                    <p>
                        For our members that have some open space (small or
                        large) and would like to grow some dahlias for the club.
                        The club will buy and supply the tubers. The partner
                        grower grows and maintains the plants and get the cut
                        flowers through the seas to do as they wish. Then at the
                        end of the season the club gets the clubs of tubers
                        back. Each grower determines how many they can grow for
                        the club. Having the tuberis a big source of funding for
                        the club’s programs through the year.
                    </p>
                    <Link href="#">
                        <a className="button">Apply as a Growing Partner</a>
                    </Link>
                </CompactText>
            </CompactTextWrapper>
        </Page>
    )
}
