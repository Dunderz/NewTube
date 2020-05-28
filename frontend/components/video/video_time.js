export default time => {
    const uploadDate = new Date(time);
    const currentDate = new Date();
    
    let days = (currentDate.getTime() - uploadDate.getTime())/1000/60/60/24;
    if (days >= 365) {
        let years = Math.floor(days/365);
        if (years >= 1) {
            return years == 1 ? "1 year ago" : `${years} years ago`;
        }
    } else if (days >= 30) {
        let months = Math.floor(days/30);
        if (months >= 1) {
            return months == 1 ? "1 month ago" : `${months} months ago`;
        }
    } else if (days >= 7) {
        let weeks = Math.floor(days/7);
        return weeks == 1 ? "1 week ago" : `${weeks} weeks ago`;
    } else if (days >= 1) {
        return days == 1 ? "1 day ago" : `${days} days ago`;
    } else {
        let hours = days*24;
        if (hours >= 1) {
            hours = Math.floor(hours);
            return hours == 1 ? "1 hour ago" : `${hours} hours ago`;
        } else {
            let minutes = hours*60;
            if (minutes >= 1) {
                minutes = Math.floor(minutes);
                return minutes == 1 ? "1 minute ago" : `${minutes} minutes ago`;
            } else {
                return 'Just now';
            }
        }
    }
  }