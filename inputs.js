exports = module.exports = function (Ghost) {
  Ghost.prototype.val = function (value) {
    if (this.type === 'set') {
      this.setRunner(this.element, (el) => {
        el.value = value
      })
    } else {
      return this.getRunner(this.element, (el) => {
        return el.value
      })
    }
  }
}
