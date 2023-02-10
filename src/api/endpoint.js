const FIELDS_API = 'status,countryCode,city,zip,lat,lon,offset,isp,query'

export const getIPAddressEndpoint = (address) => {
    if (address === '') {
        return '';
    }

    return `http://ip-api.com/json/${address}?fields=${FIELDS_API}`
}