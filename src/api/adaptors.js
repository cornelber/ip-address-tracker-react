export const getIPAddressDetails = (apiResponse) => {
    if (!apiResponse || apiResponse.error) {
        return {}
    }

    const rawIPAddressDetails = apiResponse;
    
    const adaptedIPAddressDetails = {
        ip: rawIPAddressDetails?.query,
        location: {
            country: rawIPAddressDetails?.country,
            city: rawIPAddressDetails?.city,
            zip: rawIPAddressDetails?.zip,
        },
        coordinates: {
            lat: rawIPAddressDetails?.lat,
            lng: rawIPAddressDetails?.lon
        },
        timezone: rawIPAddressDetails?.timezone,
        isp: rawIPAddressDetails?.isp,
    }

    return adaptedIPAddressDetails;
}