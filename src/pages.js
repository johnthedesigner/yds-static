export const pageTitle = (segment) => {
    let fragment = 'Yankee Dahlia Society'
    return segment ? `${fragment} | ${segment}` : fragment
}

export const getUrl = (path) => {
    // let base = 'http://yankeedahliasociety.com';
    let base = process.env.DOMAIN
    return path ? `${base}${path}` : base
}

const pages = {
    home: {
        label: 'Home',
        title: pageTitle('Home'),
        url: getUrl(),
    },
    membership: {
        label: 'Membership',
        title: pageTitle('Membership'),
        url: getUrl('/membership'),
    },
    events: {
        label: 'Events',
        title: pageTitle('Events'),
        url: getUrl('/events'),
    },
    about: {
        label: 'About Us',
        title: pageTitle('About Us'),
        url: getUrl('/about'),
    },
    contact: {
        label: 'Contact Us',
        title: pageTitle('Contact Us'),
        url: getUrl('/contact'),
    },
}

export default pages
