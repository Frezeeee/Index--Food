const slider = new Swiper('#intro-slider', {
    slidesPerView: 1,
    slideClass: 'intro__slide',
    navigation: {
        nextEl: '.intro__button-next',
        prevEl: '.intro__button-prev',
    },
    spaceBetween: 30,
    centeredSlides: true,
    parallax: true,
    speed: 1500,
    autoplay: {
        delay: 500,
    },
});

slider.slideTo(1);

const header = document.querySelector('.header');
document.addEventListener('scroll', () => {
	const scrollY = window.scrollY;
	const headerHeight = header.offsetHeight;

	if (scrollY > 200) {
		header.style.cssText = `
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			width: 100%;
			background: rgb(255 255 255 / 0.8);
			backdrop-filter: blur(50px);
			z-index: 100;
		`;

		document.body.style.paddingTop = `${headerHeight}px`;
	} else {
		header.style.cssText = ``;
		document.body.style.paddingTop = 0;
	}
});
