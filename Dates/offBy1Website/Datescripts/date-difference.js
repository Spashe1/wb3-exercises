let startDate = new Date("Julu 11, 2022");
let endDate = new Date("November 11, 2022");
let msec_per_day = 1000 * 60 * 60 * 24;
let elapseMilliseconds = endDate.getTime() - startDate.getTime();
let dayDiff = elapseMilliseconds / msec_per_day;
let numDays = [Math.round(dayDiff)];

console.log(`The number of days between dates is:  ${numDays}`);