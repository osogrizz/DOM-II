// Your code goes here
let logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseover', (event) => {
  logo.style.color = 'red';
  logo.style.transition = 'color 0.3s';
})

logo.addEventListener('mouseleave', event => {
  logo.style.color = '#222'
  logo.style.transition = 'color 1.7s';
})

let navItems = document.querySelectorAll('.nav-link');
console.log(navItems);
let arr = Array.from(navItems);
arr.map( item => {
  item.addEventListener('click', event => {
    event.preventDefault()
  })
})

let html = document.querySelector('html');
html.addEventListener('wheel', (event) => {
  event.target.style.background = '#222';
  event.target.style.color = '#fff';
})

html.addEventListener('dblclick', (e) => {
  e.target.style.background = '#fff';
  e.target.style.color = '#222';
})

logo.addEventListener('keydown', (e) => {
  e.target.style.color = '#222';
})

window.addEventListener('load', (e) => {
  alert("Hello World!")
})

arr.map( button => {
  button.addEventListener('focus', (e) => {
    e.target.remove()
  })
})


let title = document.getElementsByTagName('h2');
let titles = Array.from(title)
window.addEventListener('resize', (e) => {
  titles.map( h2 => {
    h2.style.color = 'green'
  })
})

let destText = document.querySelectorAll('.destination p');
console.log(destText)
destText.forEach( dest => {

  dest.addEventListener('select', event => {
    console.log(event);
  })
})