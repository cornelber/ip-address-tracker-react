
export const convertOffsetToHours = (offsetInSeconds) => {
    if (!offsetInSeconds) {
        return;
    }
    
    let sign = offsetInSeconds < 0 ? '-' : '+';
    let absoluteOffsetSeconds = Math.abs(offsetInSeconds);
    
    let hours = Math.floor(absoluteOffsetSeconds / 3600).toString().padStart(2, '0');
    let minutes = Math.floor(hours / 60).toString().padStart(2, '0');

    return `${sign}${hours}:${minutes}`

}