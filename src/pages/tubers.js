import Page from '../components/page'
import Hero from '../components/hero'
import Pingpong from '../components/pingpong'
import Bumper from '../components/bumper'
import pages from '../pages.json'
import styles from '../styles/Tubers.module.css'

export default function Events() {
    return (
        <Page page={pages.tubers}>
            <div className={styles.tubers__body}>
                <Hero title="Our Tubers" image="/dividing-dahlias.jpg" />
                <Pingpong
                    side="left"
                    image="https://via.placeholder.com/900x1300"
                >
                    <h3>We need tubers and your support!</h3>
                    <p>
                        Have you divided tubers and have what you need for your
                        garden with some extra.
                    </p>
                    <p>
                        Naturally a dahlia club needs dahlias to support club
                        activities and education.
                    </p>
                    <p>
                        We have a plan to grow our tuber stock through our
                        Growing Partners for the 2021 season so we can have a
                        huge sale in 2022. Spring tuber sales provide a good
                        source of funding while being a great source for members
                        to have access to tubers for sale. Over the last few
                        months our founders have personally supported the
                        purchase of nearly 500 tubers from growers around the US
                        and in addition contributed 100 tubers from their
                        personal collections. We look forward to having close to
                        200 varieties to offer for our first sale in 2021. We
                        need some additional depth in stock as well as variety
                        assortment so we can make 2022 a huge sale.
                    </p>
                    <p>
                        Our club has connected with several Growing Partners
                        whom in kind share their extra growing space to grow
                        dahlia plants and tubers for the club. YDS supplies the
                        tubers to our growing partner and in exchange the
                        Growing Partner gets the cut flowers during the season
                        to do with they wish while the club gets the tubers at
                        the end of the season.
                    </p>

                    <a href="#" className="button">
                        Click me
                    </a>
                </Pingpong>
                <Bumper
                    text="Interested in Tuber Sales & Swaps? Become a Member to Get Updates!"
                    buttonUrl="/membership"
                    buttonLabel="Membership Info"
                />
            </div>
        </Page>
    )
}
