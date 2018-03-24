exports = module.exports = function (Ghost) {
  Ghost.prototype.load = function (url, callback) {
    this.setRunner(this.element, (el) => {
      var xhr = new XMLHttpRequest()
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          el.innerHTML = xhr.responseText
          if (callback) callback()
        }
      }
      xhr.open('GET', url, true)
      xhr.send(null)
    })
  }
}
