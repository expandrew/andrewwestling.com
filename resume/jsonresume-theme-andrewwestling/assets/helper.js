const md = require('markdown-it')()
const iso = require('iso-3166-1')
const moment = require('moment')

const mdToHtml = (string) => string ? md.render(string) : ''

const calcLocation = (location) => {
  const array = []

  if (!location) {
    return null
  }

  if (location.city) {
    array.push(location.city)
  }

  if (location.region) {
    array.push(location.region)
  }

  if (location.countryCode) {
    const country = iso.whereAlpha2(location.countryCode)
    array.push(country && array.length < 2 ? country.country : location.countryCode)
  }

  return array.length > 0 ? array.join(', ') : null
}

const calcDate = (date, format = 'MMMM YYYY') => {
  return date ? beautifyDate(date, format) : null
}

const calcDateRange = (start, end) => {
  const array = []

  const startDate = calcDate(start)
  const endDate = calcDate(end)

  if (startDate && endDate) {
    array.push(startDate, endDate)
  } else if (startDate) {
    array.push(startDate, 'Present')
  } else if (endDate) {
    array.push(endDate)
  } else {
    return null
  }

  return array.join(' – ')
}

const calcYearRange = (start, end) => {
  const array = [];

  const startDate = calcDate(start, 'YYYY');
  const endDate = calcDate(end, 'YYYY');

  if (startDate && endDate) {
    array.push(startDate, endDate);
  } else if (startDate) {
    array.push(startDate, 'Present');
  } else if (endDate) {
    array.push(endDate);
  } else {
    return null;
  }

  return array.join('–');
};

const beautifyDate = (date, format = 'MMMM YYYY') => moment(date, 'YYYY-MM-DD').format(format)

const beautifyArray = (separator, array) => array.filter(x => x).join(separator)

const arrayToPhrase = (array) => {
  let str = ''
  const a = array.filter(x => x)

  if (a.length === 1) {
    str = a[0]
  } else if (a.length === 2) {
    str = a.join(' and ')
  } else if (a.length > 2) {
    str = a.slice(0, -1).join(', ') + ' and ' + a.slice(-1)
  }

  return str.charAt(0).toUpperCase() + str.slice(1)
}

const beautifyLink = (string) => {
  let s = string.trim().replace(/^(?:https?:\/\/)?(?:www\.)?/i, '')
  s = s.endsWith('/') ? s.slice(0, -1) : s
  s = s.split('/')
  s[0] = `<strong>${s[0]}</strong>`
  return s.join('/')
}

const validArray = (array) => array !== undefined && array.length > 0

const CSS_PREFIX = "aw-resume-";
const applyCssPrefix = (prefix = CSS_PREFIX) => (_, classes) => {
  const prefixedClasses = classes
    .split(" ")
    .map((className) => `${prefix}${className}`)
    .join(" ");
  return `class="${prefixedClasses}"`;
};


module.exports = {
  mdToHtml,
  calcLocation,
  calcDate,
  calcDateRange,
  calcYearRange,
  beautifyDate,
  beautifyArray,
  arrayToPhrase,
  beautifyLink,
  validArray,
  CSS_PREFIX,
  applyCssPrefix
}
