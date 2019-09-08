// Your code goes here

// #1
let logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseover', (event) => {
  logo.style.color = 'red';
  logo.style.transition = 'color 0.3s';
})

// #2
logo.addEventListener('mouseleave', event => {
  logo.style.color = '#222'
  logo.style.transition = 'color 1.7s';
})

// #3
let navItems = document.querySelectorAll('.nav-link');
console.log(navItems);
let arr = Array.from(navItems);
arr.map( item => {
  item.addEventListener('click', event => {
    event.preventDefault()
  })
})

// #4
let html = document.querySelector('html');
html.addEventListener('wheel', (event) => {
  event.target.style.background = '#222';
  event.target.style.color = '#fff';
})

// #5
html.addEventListener('dblclick', (e) => {
  e.target.style.background = '#fff';
  e.target.style.color = '#222';
})

// #6
logo.addEventListener('keydown', (e) => {
  e.target.style.color = '#222';
})

// #7
window.addEventListener('load', (e) => {
  alert("Hello World!")
})

// #8
arr.forEach( button => {
  button.addEventListener('focus', (e) => {
    e.target.remove()
  })
})

// #9
let title = document.getElementsByTagName('h2');
let titles = Array.from(title)
window.addEventListener('resize', (e) => {
  titles.map( h2 => {
    h2.style.color = 'green'
  })
})

// #10
let destText = document.querySelectorAll('.destination p');
console.log(destText)
destText.forEach( dest => {
  dest.addEventListener('drag', event => {
    event.target.remove(dest);
  })
})

// greensock animationPlayState: 

arr.forEach( nav => {
  nav.addEventListener('mouseover', event => {
  event.target.classList.add('active');
})

  nav.addEventListener('mouseleave', event => {
    event.target.classList.remove('active');
  })
})