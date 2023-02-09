export const getIPAddressEndpoint = (address) => {

    // validation
    if (address === '') {
        return '';
    }

    return `http://ip-api.com/json/${address}`
}