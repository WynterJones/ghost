exports = module.exports = function (Ghost) {
  Ghost.prototype.addClass = function (className, selector) {
    this.runner(selector, (el) => {
      el.classList.add(className)
    })
  }

  Ghost.prototype.removeClass = function (className, selector) {
    this.runner(selector, (el) => {
      el.classList.remove(className)
    })
  }

  Ghost.prototype.switchClass = function (oldClassName, newClassName, selector) {
    this.runner(selector, (el) => {
      el.classList.add(newClassName)
      el.classList.remove(oldClassName)
    })
  }

  Ghost.prototype.hasClass = function (className, selector) {
    return this.runner(selector, (el) => {
      let classes = el.classList
      for (var i = 0; i < classes.length; i++) {
        if (className === classes[i]) {
          return true
        }
      }
    })
  }

  Ghost.prototype.isVisible = function (selector) {
    return this.runner(selector, (el) => {
      return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length)
    })
  }
}
