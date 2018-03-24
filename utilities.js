exports = module.exports = function (Ghost) {
  Ghost.prototype.wait = function (callback, milliseconds) {
    setTimeout(() => {
      return callback()
    }, milliseconds)
  }
}
