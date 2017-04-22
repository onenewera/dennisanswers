// function hasClass(el, className) {
//   if (el.classList)
//     return el.classList.contains(className)
//   else
//     return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
// }

function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}

let container = document.getElementById('container');
addClass(container, 'show');

console.log('hey');
