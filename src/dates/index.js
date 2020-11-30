const moment = require('moment')

const today = () => {
  const day = moment().format('dddd')
  return day;
}

const calendar = () => {
  const cal = moment().format('MMM D, YYYY');
  return cal;
}

const currentTime = () => {
  const time = moment().format('HH:MM:SS A');
  return time;
}

module.exports = {
  today,
  calendar,
  currentTime
}