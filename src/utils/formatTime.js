import moment from "moment-timezone";

// Function to format time
export const formatTime = (timeString) => {
    const time = moment(timeString).utc();
    return time.format("HH:mm");
};
