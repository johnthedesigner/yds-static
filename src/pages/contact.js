import Page from '../components/page'
import pages from '../pages.js'
import styles from '../styles/Home.module.css'

export default function Contact() {
    return (
        <Page page={pages.contact} backgroundClass="page__body--flower1">
            <div className={styles.home__body}>
                <p>
                    Lorem ipsum <a href="#">dolor</a> sit amet.
                </p>
            </div>
        </Page>
    )
}
