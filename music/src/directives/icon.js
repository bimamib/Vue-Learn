export default {
  beforeMount(el, binding) {
    let iconClass = ` text-2xl fa fa-${binding.value}`

    if (binding.arg === 'full') {
      iconClass = binding.value
    }

    if (binding.modifiers.right) {
      iconClass += ' float-right'
    }

    if (binding.modifiers.blue) {
      iconClass += ' text-blue-400'
    } else {
      iconClass += ' text-green-400'
    }

    el.innerHTML += `<i class="${iconClass}"></i>`
  },
}
