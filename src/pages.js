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
        description: 'Lorem ipsum dolor sit amet.',
        url: getUrl(),
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
