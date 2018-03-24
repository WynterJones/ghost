exports = module.exports = function (Ghost) {
  Ghost.prototype.hide = function (selector) {
    this.runner(selector, (el) => {
      el.style.display = 'none'
    })
  }

  Ghost.prototype.show = function (selector) {
    this.runner(selector, (el) => {
      el.style.display = ''
    })
  }
}
