const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show') //toggle = adiciona
  })
}

// função click nos links
const links = document.querySelectorAll('nav ul li a')

for (const element of links) {
  element.addEventListener('click', function () {
    nav.classList.remove('show') //remove = remova
  })
}

function changeHeaderScroll() {
    const header = document.querySelector('#header')
    header.classList.toggle('scroll', window.scrollY >= 100)
}

// ScrollRevel - configurações do scrollrevel
const scroll = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 850,
    reset: true
})

scroll.reveal(
    `#about .image,  #service .wrapper, #service .wrapper_card, #depoiments .wrapper, #footer .nav, #footer .mobile`,
    { interval: 80 }
)


window.addEventListener('scroll', function () {
    changeHeaderScroll()
})
