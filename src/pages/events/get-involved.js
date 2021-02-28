import Link from 'next/link'

import Page from '../../components/page'
import Hero from '../../components/hero'
import Bumper from '../../components/bumper'
import { CompactTextWrapper, CompactText } from '../../components/compactText'
import pages from '../../pages.json'
import styles from '../../styles/Events.module.css'

export default function Events() {
    return (
        <Page page={pages.events}>
            <div className={styles.events__body}>
                <Hero title="Get Involved in YDS Events" image="/garden.jpg" />
                <CompactTextWrapper>
                    <CompactText>
                        <h3>Speakers Wanted</h3>
                        <p>
                            Over the years what is interesting as we expand and
                            share our knowledge and experience is that every
                            grower has a slightly different technique to staking
                            their plants and storing their tubers.
                        </p>
                        <Link href="#">
                            <a className="button">Get in Touch</a>
                        </Link>
                    </CompactText>
                    <CompactText>
                        <h3>Garden Tours Wanted</h3>
                        <p>
                            We would love to see your garden in person or even
                            virtually. If you are local we would love to arrange
                            a safe outdoor socially distant experience or even a
                            pre-recorded tour. For those across the world we
                            would love to try a live or pre-recorded virtual
                            tour.
                        </p>
                        <Link href="#">
                            <a className="button">Get in Touch</a>
                        </Link>
                    </CompactText>
                </CompactTextWrapper>
                <Bumper
                    text="Become a member to get updates about our tuber sales and swaps"
                    buttonUrl="#"
                    buttonLabel="Learn About Memberships"
                />
            </div>
        </Page>
    )
}
