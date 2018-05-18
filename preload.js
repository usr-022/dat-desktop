'use strict'
// eslint-disable-next-line no-eval
window.eval = global.eval = function () {
  throw new Error('Sorry, this app does not support window.eval().')
}
const setTimeout = global.setTimeout
window.setTimeout = global.setTimeout = function (fn, ms) {
  if (typeof fn !== 'function') {
    throw new Error('Sorry, this app does not support setTimeout() with a string')
  }
  return setTimeout(fn, ms)
}
const setInterval = global.setInterval
window.setInterval = global.setInterval = function (fn, ms) {
  if (typeof fn !== 'function') {
    throw new Error('Sorry, this app does not support setInterval() with a string')
  }
  return setInterval(fn, ms)
}
process.once('loaded', () => {
  document.addEventListener('DOMContentLoaded', () => require('./static/bundle'))
})
