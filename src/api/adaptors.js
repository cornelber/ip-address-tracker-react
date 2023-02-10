export const getIPAddressDetails = (apiResponse) => {
    if (!apiResponse || apiResponse.error) {
        return {}
    }

    const rawIPAddressDetails = apiResponse;
    
    const adaptedIPAddressDetails = {
        status: rawIPAddressDetails.status,
        ip: rawIPAddressDetails.query,
        location: {
            city: rawIPAddressDetails?.city,
            country: rawIPAddressDetails?.countryCode,
            zip: rawIPAddressDetails?.zip,
        },
        coordinates: {
            lat: rawIPAddressDetails?.lat,
            lng: rawIPAddressDetails?.lon
        },
        utc: rawIPAddressDetails?.offset,
        isp: rawIPAddressDetails?.isp,
    }

    return adaptedIPAddressDetails;
}