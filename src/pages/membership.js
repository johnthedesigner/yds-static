import Page from '../components/page'
import pages from '../pages.js'
import styles from '../styles/membership.module.css'

export default function Membership() {
    return (
        <Page page={pages.membership} backgroundClass="page__body--flower4">
            <div className={styles.home__body}>
                <p>
                    Lorem ipsum <a href="#">dolor</a> sit amet.
                </p>
                <iframe
                    className="membership-form"
                    src="https://docs.google.com/forms/d/e/1FAIpQLScqph08UMFIOpRHfcqr_y3pdgAKZCDOiBCxi-DkMq4GGKodvA/viewform?embedded=true"
                    width="640"
                    height="959"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                >
                    Loading…
                </iframe>
            </div>
        </Page>
    )
}
