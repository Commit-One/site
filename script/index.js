function changeHeaderScroll() {
    const header = document.querySelector('#header')
    header.classList.toggle('scroll', window.scrollY >= 100)
}

// ScrollRevel - configurações do scrollrevel
const scroll = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 900,
    delay: 100,
    easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
    reset: false,
    mobile: true
})

scroll.reveal('#home .container > div:first-child, #home .container .image', { origin: 'left', distance: '60px', duration: 1000, delay: 150 })
scroll.reveal('#about .container > div, #service .wrapper_card', { origin: 'bottom', distance: '40px', duration: 900, interval: 120 })
scroll.reveal('#partners .container > div', { origin: 'left', distance: '40px', duration: 900, interval: 120 })
scroll.reveal('#depoiments .wrapper > div', { origin: 'right', distance: '40px', duration: 900, interval: 120 })
scroll.reveal('#footer .nav, #footer .mobile', { origin: 'bottom', distance: '30px', duration: 800, interval: 60 })

window.addEventListener('scroll', function () {
    changeHeaderScroll()
})
