
import { Swiper, Navigation, Pagination } from 'swiper/js/swiper.esm'

window.addEventListener('load', () => {

	Swiper.use([Navigation, Pagination]);

	new Swiper('.slider .container .slider__wrapperSwiper .slider__swiper-container', {
		loop: true,
		slidesPerView: 1,
		navigation: {
			nextEl: '.slider .container .slider__wrapperSwiper .slider__sliderButtons .slider__chevron_left',
			prevEl: '.slider .container .slider__wrapperSwiper .slider__sliderButtons .slider__chevron_right',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		}
	})
})