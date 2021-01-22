export const pageTitle = (segment) => {
    let fragment = "Yankee Dahlia Society";
    return ( segment ? `${fragment} | ${segment}` : fragment )
  }

export const pageUrl = (path) => {
    // let base = 'http://yankeedahliasociety.com';
    let base = process.env.DOMAIN;
    return ( path ? `${base}${path}` : base )
  }
  
const pages = {
    home: {
      label: "Home",
      title: pageTitle("Home"),
      url: pageUrl()
    },
    membership: {
      label: "Membership",
      title: pageTitle("Membership"),
      url: pageUrl("/membership")
    },
    events: {
      label: "Events",
      title: pageTitle("Events"),
      url: pageUrl("/events")
    },
    about: {
      label: "About Us",
      title: pageTitle("About Us"),
      url: pageUrl("/about")
    },
    contact: {
      label: "Contact Us",
      title: pageTitle("Contact Us"),
      url: pageUrl("/contact")
    }
  }
  
  export default pages
