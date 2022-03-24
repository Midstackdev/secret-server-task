export const timeDiffInMins = (timestamp) => {
    const savedTime = new Date(timestamp);
    const now = new Date()
    return (now - savedTime)/1000/60
}