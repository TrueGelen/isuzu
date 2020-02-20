
import { Swiper, Navigation } from 'swiper/js/swiper.esm'

window.addEventListener('load', () => {

	Swiper.use([Navigation]);

	new Swiper('.slider .container .slider__wrapperSwiper .slider__swiper-container', {
		loop: true,
		slidesPerView: 1,
		navigation: {
			nextEl: '.slider .container .slider__wrapperSwiper .slider__sliderButtons .slider__chevron_left',
			prevEl: '.slider .container .slider__wrapperSwiper .slider__sliderButtons .slider__chevron_right',
		}
	})
})