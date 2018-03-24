exports = module.exports = function (Ghost) {
  Ghost.prototype.attr = function (property, value) {
    if (this.type === 'set') {
      this.setRunner(this.element, (el) => {
        el.setAttribute(property, value)
      })
    } else {
      return this.getRunner(this.element, (el) => {
        return el.getAttribute(property)
      })
    }
  }

  Ghost.prototype.data = function (property, value) {
    if (this.type === 'set') {
      this.setRunner(this.element, (el) => {
        el.dataset[property] = value
      })
    } else {
      return this.getRunner(this.element, (el) => {
        return el.dataset[property]
      })
    }
  }

  Ghost.prototype.removeAttributes = function (selector) {
    this.runner(selector, (el) => {
      while (el.attributes.length > 0) {
        el.removeAttribute(el.attributes[0].name)
      }
    })
  }
}
