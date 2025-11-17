import Icons from './utils/Icons.js';
import Swiper from 'swiper/bundle';
Icons.load();
class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();
    this.initPagination();
  }

  initPagination() {
    const target = document.querySelector('.js-pagination');
    const swiper = new Swiper(target, {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: '.swiper-pagination',

        type: 'bullets',
      },
    });
  }
}
new Main();
