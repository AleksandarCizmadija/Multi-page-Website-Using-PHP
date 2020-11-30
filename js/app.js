const menu = document.querySelector('.nav-wrapper'),
    bar = document.querySelector('.nav-hamburger');

bar.addEventListener('click', function () {
    if (menu.style.maxHeight) {
        menu.style.maxHeight = null;
    } else {
        menu.style.maxHeight = menu.scrollHeight + 'px'
    }
});

//owl carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    nav: false,
    center: true,
    items: 1,
    margin: 30,
    stagePadding: 0,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});