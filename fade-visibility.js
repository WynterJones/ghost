exports = module.exports = function (Ghost) {
  Ghost.prototype.fadeIn = function (selector) {
    this.runner(selector, (el) => {
      let originalOpacity = window.getComputedStyle(el).getPropertyValue('opacity')
      let opacity = 0
      el.style.opacity = opacity
      let timer = () => {
        el.style.opacity = opacity
        opacity = opacity + 0.1
        if (opacity > originalOpacity) {
          clearInterval(fade)
        }
      }
      let fade = setInterval(timer, 0.1)
      el.style.display = ''
    })
  }

  Ghost.prototype.fadeOut = function (selector) {
    this.runner(selector, (el) => {
      let originalOpacity = window.getComputedStyle(el).getPropertyValue('opacity')
      let opacity = 1
      el.style.opacity = opacity
      let timer = () => {
        el.style.opacity = opacity
        opacity = opacity - 0.1
        if (opacity < originalOpacity) {
          el.style.display = 'none'
          clearInterval(fade)
        }
      }
      let fade = setInterval(timer, 0.1)
    })
  }
}
