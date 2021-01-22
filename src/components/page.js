import _ from 'lodash'

import Navbar, {pages} from '../components/navbar.js'
import Logo from '../public/logo-vertical.svg'
import IconFB from '../public/icon-fb.svg'
import IconIG from '../public/icon-ig.svg'

export default function Page(props) {
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
        <Navbar currentUrl={props.currentUrl}/>
        {props.children}
      </main>
    </div>
  )
}
