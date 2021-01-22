import Page from '../components/page'
import pages from '../pages.js'
import styles from '../styles/Home.module.css'

export default function Membership() {
    return (
        <Page page={pages.membership}>
            <div className={styles.home__body}>
                <p>
                    Lorem ipsum <a href="#">dolor</a> sit amet.
                </p>
            </div>
        </Page>
    )
}
