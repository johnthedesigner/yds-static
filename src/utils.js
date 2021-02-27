import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const { DOMAIN } = publicRuntimeConfig

export const pageTitle = (segment) => {
    let fragment = 'Yankee Dahlia Society'
    return segment ? `${fragment} | ${segment}` : fragment
}

export const getUrl = (path) => {
    return path ? DOMAIN + path : DOMAIN
}
