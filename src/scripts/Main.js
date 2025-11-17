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
      loop: true,
      slidesPerView: 1,
      pagination: {
        el: '.swiper-naviguation',
      },
    });
  }
}
new Main();
