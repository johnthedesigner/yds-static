import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const { DOMAIN } = publicRuntimeConfig

export const pageTitle = (segment) => {
    let fragment = 'Yankee Dahlia Society'
    return segment ? `${fragment} | ${segment}` : fragment
}

const getUrl = (path) => {
    return path ? DOMAIN + path : DOMAIN
}

const pages = {
    prelaunch: {
        label: 'Coming Soon',
        title: pageTitle('Coming Soon'),
        description:
            'Promoting dahlia exhibition, hybridization, and education',
        url: getUrl('/'),
        inMenu: false,
    },
    home: {
        label: 'Home',
        title: pageTitle('Home'),
        description: 'Lorem ipsum dolor sit amet.',
        url: getUrl('/home'),
        inMenu: true,
    },
    membership: {
        label: 'Membership',
        title: pageTitle('Membership'),
        description: 'Lorem ipsum dolor sit amet.',
        url: getUrl('/membership'),
        inMenu: true,
    },
    events: {
        label: 'Events',
        title: pageTitle('Events'),
        description: 'Lorem ipsum dolor sit amet.',
        url: getUrl('/events'),
        inMenu: true,
    },
    tubers: {
        label: 'Our Tubers',
        title: pageTitle('YDS Tubers'),
        description: 'Lorem ipsum dolor sit amet.',
        url: getUrl('/tubers'),
        inMenu: true,
    },
    about: {
        label: 'About Us',
        title: pageTitle('About Us'),
        description: 'Lorem ipsum dolor sit amet.',
        url: getUrl('/about'),
        inMenu: true,
    },
    contact: {
        label: 'Contact Us',
        title: pageTitle('Contact Us'),
        description: 'Lorem ipsum dolor sit amet.',
        url: getUrl('/contact'),
        inMenu: true,
    },
}

export default pages
