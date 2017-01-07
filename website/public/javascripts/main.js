function highlightHash () {
  var id = window.location.hash.substring(1)
  var el = document.getElementById(id)
  if(!el) {
    return
  }
  while(['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'A'].indexOf(el.nodeName) >= 1) {
    el = el.parentNode
  }
  el.classList.toggle('flash', true)
  setTimeout(function () {
    el.classList.toggle('flash', false)
  },500)
}

document.addEventListener('DOMContentLoaded', function () {
  highlightHash()
  window.onhashchange = highlightHash
})