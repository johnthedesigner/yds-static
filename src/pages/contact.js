import { useState } from 'react'
import Page from '../components/page'
import pages from '../pages.json'
import styles from '../styles/Home.module.css'

export default function Contact() {
    const [isBusiness, setIsBusiness] = useState('false')

    const BusinessFormFields = () => {
        if (!isBusiness) {
            return (
                <div>
                    <div>
                        <label>Business Name</label>
                        <input type="text"></input>
                    </div>
                    <div>
                        <label>Business Name</label>
                        <input type="text"></input>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }

    return (
        <Page page={pages.contact} backgroundClass="page__body--flower1">
            <div className={styles.home__body}>
                <p>
                    Lorem ipsum <a href="#">dolor</a> sit amet.
                </p>
                <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfRp8mGPbFhr2s0N-somQ3bcfnjGgcM_KHXwmQ_v3oT7_sYpg/formResponse">
                    <input name="entry.1067381002" type="text" />
                    <label>
                        <input
                            type="checkbox"
                            onChange={() => setIsBusiness(!isBusiness)}
                            value={isBusiness}
                        />{' '}
                        Business?
                    </label>
                    <BusinessFormFields />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </Page>
    )
}
