exports = module.exports = function (Ghost) {
  Ghost.prototype.on = function (eventType, selector, callback, options) {
    document.addEventListener(eventType, this.getConditionalCallback(selector, callback), options)
  }

  Ghost.prototype.getConditionalCallback = function (selector, callback) {
    return function (e) {
      if (!e.target) return
      let element = cssSelector(selector)
      for (let i = 0; i < element.length; i++) {
        if (element[i].contains(e.target)) {
          callback.apply(element[i], arguments)
        }
      }
    }
  }

  Ghost.prototype.trigger = function (eventType, selector) {
    this.runner(selector, (el) => {
      var event = document.createEvent('HTMLEvents')
      event.initEvent(eventType, true, false)
      el.dispatchEvent(event)
    })
  }
}

const cssSelector = require(path.join(__dirname, 'sizzle'))
