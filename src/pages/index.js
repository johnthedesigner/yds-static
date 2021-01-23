import Head from 'next/head'

import Page from '../components/page'
import pages from '../pages.js'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <Page page={pages.home} backgroundClass="page__body--flower3">
            <div className={styles.home__body}>
                <h1>Introducing the Yankee Dahlia Society</h1>
                <h3>Jan 20, 2021</h3>
                <p>
                    Etiam fermentum posuere lorem eu blandit. Aenean aliquam
                    arcu ac arcu lacinia auctor. Duis fringilla, dui ut
                    dignissim tristique, arcu odio elementum erat, id pharetra
                    mi nulla sit amet risus. Nunc vitae ipsum sit amet tortor
                    blandit facilisis. Ut quis felis eleifend lacus auctor
                    luctus a a sem. Integer augue tellus, consectetur ut
                    eleifend non, pellentesque non tellus. Sed nec enim porta
                    magna sollicitudin molestie. Etiam ultricies vitae est ut
                    sagittis. Mauris pretium metus ante, in aliquet felis
                    laoreet eget. Nunc scelerisque lacinia quam ac venenatis.
                    Nulla cursus, neque in laoreet finibus, dui orci dictum
                    risus, in tincidunt nulla dui eget leo.
                </p>
                <p>
                    Suspendisse sed sodales ex. Aliquam mattis, dolor ac
                    venenatis suscipit, eros libero auctor risus, sit amet
                    auctor libero augue in diam. Pellentesque pharetra ligula
                    ligula, quis efficitur purus luctus sed. Nunc sollicitudin
                    consequat odio ac auctor. Fusce ut risus nec elit elementum
                    fermentum vel nec tellus. Vivamus ligula orci, posuere ut
                    enim eget, lacinia faucibus eros. Cras vulputate, leo at
                    lobortis euismod, massa orci condimentum diam, sed fringilla
                    leo diam eget orci. Vestibulum non dapibus libero.
                </p>
                <p>
                    Ut sit amet condimentum massa. Nulla malesuada libero quis
                    cursus tempus. Cras tincidunt erat odio, id consequat ante
                    bibendum in. Pellentesque eget fermentum ante. Donec
                    accumsan consectetur maximus. Nulla in lacinia mi. Morbi
                    molestie quam non ex elementum viverra. Aenean vitae ante
                    posuere, vulputate libero sed, viverra risus. Maecenas
                    luctus velit ut erat auctor tristique. Suspendisse orci
                    mauris, egestas ut felis vitae, sagittis mattis est. Ut
                    tristique, augue at auctor gravida, leo massa pulvinar
                    lorem, elementum lobortis lacus ligula nec nisi.{' '}
                </p>
            </div>
        </Page>
    )
}
