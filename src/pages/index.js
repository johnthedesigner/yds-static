import styles from '../styles/Home.module.css'
import Logo from '../public/logo-vertical.svg'
import IconFB from '../public/icon-fb.svg'
import IconIG from '../public/icon-ig.svg'

export default function Home() {
  return (
    <div className="page">
      <div className="page__sidebar">
        <div className="sidebar__top">
          <Logo/>
        </div>
        <div className="sidebar__bottom">
          <IconFB className="social-icon"/>
          <IconIG className="social-icon"/>
        </div>
      </div>
      <main className="page__body">
        <nav className="navbar">
          <ul className="navbar__list">
            <li className="navbar__item">
              <a className="navbar__link navbar__link--active" href="#">Home</a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="#">Membership</a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="#">Events</a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="#">About Us</a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
        <div className={styles.home__body}>
          <p>Lorem ipsum <a href="#">dolor</a> sit amet.</p>
        </div>
      </main>
    </div>
  )
}
