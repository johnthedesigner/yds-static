import Page from '../components/page'
import pages from '../pages.js'
import styles from '../styles/Home.module.css'

export default function Contact() {
  return (
    <Page currentUrl={pages.contact.url}>
        <div className={styles.home__body}>
          <p>Lorem ipsum <a href="#">dolor</a> sit amet.</p>
        </div>
    </Page>
  )
}
