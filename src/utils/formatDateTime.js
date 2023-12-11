import moment from "moment-timezone";

// Function to format time
export const formatTime = (timeString) => {
    const time = moment(timeString).utc();
    return time.format("HH:mm");
};

// Function to format date
export const formatDate = (dateString) => {
    const date = moment(dateString).utc();
    return date.format("YYYY-MM-DD");
};
