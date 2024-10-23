export default {
  beforeMount(el, binding) {
    let iconClass = ` text-2xl fa fa-${binding.value.icon} text-blue-400`

    if (binding.value.right) {
      iconClass += ' float-right'
    }

    el.innerHTML += `<i class="${iconClass}"></i>`
  },
}
