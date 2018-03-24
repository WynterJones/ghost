class Ghost {

  init (selector, type) {
    if (selector) {
      if (selector.nodeType === 1 || selector.nodeType === 11 || selector.nodeType === 9) {
        this.element = selector
      } else {
        this.element = (this.cssSelector(selector)) ? this.cssSelector(selector) : 'invalid'
      }
    } else {
      this.element = 'invalid'
    }
    this.type = type
    return this
  }

  cssSelector (selector) {
    return Sizzle(selector)
  }

  runner (selector, callback) {
    let el = this.init(selector).element
    this.setRunner(el, callback)
  }

  get (selector) {
    this.init(selector, 'get')
    return this
  }

  getRunner (el, callback) {
    let returnCallback
    if (typeof el.length === 'undefined') {
      returnCallback = callback(el)
    } else if (el !== 'invalid') {
      for (let i = 0; i < el.length; i++) {
        returnCallback = callback(el[i])
      }
    }
    return returnCallback
  }

  set (selector) {
    this.init(selector, 'set')
    return this
  }

  add (selector) {
    this.init(selector, 'set')
    return this
  }

  remove (selector) {
    this.init(selector, 'set')
    return this
  }

  setRunner (el, callback) {
    if (typeof el.length === 'undefined') {
      callback(el)
    } else if (el !== 'invalid') {
      for (let i = 0; i < el.length; i++) {
        callback(el[i])
      }
    }
  }

}

const Sizzle = require(path.join(__dirname, 'sizzle'))

require(path.join(__dirname, 'attributes'))(Ghost)
require(path.join(__dirname, 'css'))(Ghost)
require(path.join(__dirname, 'html'))(Ghost)
require(path.join(__dirname, 'fade-visibility'))(Ghost)
require(path.join(__dirname, 'visibility'))(Ghost)
require(path.join(__dirname, 'events'))(Ghost)
require(path.join(__dirname, 'load'))(Ghost)
require(path.join(__dirname, 'inputs'))(Ghost)
require(path.join(__dirname, 'utilities'))(Ghost)

exports = module.exports = Ghost
