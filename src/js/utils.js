// convert offset from seconds to hours
export const convertOffsetToHours = (offsetInSeconds) => {
    if (offsetInSeconds === undefined || offsetInSeconds === null) {
        return;
    }

    let sign = offsetInSeconds < 0 ? '-' : '+';

    if (offsetInSeconds === 0) {
        return `UTC ${sign}00:00`;
    }

    let absoluteOffsetSeconds = Math.abs(offsetInSeconds);
    let hours = Math.floor(absoluteOffsetSeconds / 3600).toString().padStart(2, '0');
    let minutes = Math.floor(hours / 60).toString().padStart(2, '0');

    return `UTC ${sign}${hours}:${minutes}`

}