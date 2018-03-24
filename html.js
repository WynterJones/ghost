exports = module.exports = function (Ghost) {
  Ghost.prototype.html = function (html) {
    if (this.type === 'set') {
      this.setRunner(this.element, (el) => {
        el.innerHTML = html
      })
    } else {
      return this.getRunner(this.element, (el) => {
        return el.innerHTML
      })
    }
  }

  Ghost.prototype.text = function (text) {
    if (this.type === 'set') {
      this.setRunner(this.element, (el) => {
        el.textContent = text
      })
    } else {
      return this.getRunner(this.element, (el) => {
        return el.textContent
      })
    }
  }

  Ghost.prototype.append = function (html) {
    this.setRunner(this.element, (el) => {
      let output = document.createElement('div')
      output.innerHTML = html
      el.appendChild(output.firstChild)
    })
  }

  Ghost.prototype.prepend = function (html) {
    this.setRunner(this.element, (el) => {
      let output = document.createElement('div')
      output.innerHTML = html
      el.insertBefore(output.firstChild, el.firstChild)
    })
  }

  Ghost.prototype.find = function (findSelector) {
    return this.getRunner(this.element, (el) => {
      if (!el) return
      let element = this.cssSelector(findSelector)
      for (let i = 0; i < element.length; i++) {
        if (el.contains(element[i])) {
          return element[i]
        }
      }
    })
  }

  Ghost.prototype.findAll = function (findSelector) {
    return this.getRunner(this.element, (el) => {
      if (!el) return
      let element = this.cssSelector(findSelector)
      let found = []
      for (let i = 0; i < element.length; i++) {
        if (el.contains(element[i])) {
          found.push(element[i])
        }
      }
      return found
    })
  }

  // Ghost.prototype.element = function (selector) {
  //   return this.runner(selector, (el) => {
  //     if (!el) return
  //     let element = this.cssSelector(selector)
  //     for (let i = 0; i < element.length; i++) {
  //       return element[i]
  //     }
  //   })
  // }
}
