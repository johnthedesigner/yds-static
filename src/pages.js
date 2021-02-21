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
    home: {
        label: 'Home',
        title: pageTitle('Home'),
        description: 'Lorem ipsum dolor sit amet.',
        url: getUrl('/'),
    },
    membership: {
        label: 'Membership',
        title: pageTitle('Membership'),
        description: 'Lorem ipsum dolor sit amet.',
        url: getUrl('/membership'),
    },
    events: {
        label: 'Events',
        title: pageTitle('Events'),
        description: 'Lorem ipsum dolor sit amet.',
        url: getUrl('/events'),
    },
    tubers: {
        label: 'Our Tubers',
        title: pageTitle('YDS Tubers'),
        description: 'Lorem ipsum dolor sit amet.',
        url: getUrl('/tubers'),
    },
    about: {
        label: 'About Us',
        title: pageTitle('About Us'),
        description: 'Lorem ipsum dolor sit amet.',
        url: getUrl('/about'),
    },
    contact: {
        label: 'Contact Us',
        title: pageTitle('Contact Us'),
        description: 'Lorem ipsum dolor sit amet.',
        url: getUrl('/contact'),
    },
}

export default pages
