import Choices from 'choices.js';
import Swiper from 'swiper';
import { Navigation, Thumbs } from 'swiper/modules';
import JustValidate from 'just-validate';
import Inputmask from 'inputmask/dist/inputmask.es6.js';
import Aos from 'aos';

export function isWebp() {
  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  }

  testWebP(function (support) {
    let className = support === true ? 'webp' : 'no-webp';
    document.documentElement.classList.add(className);
  });
}

// (gist - b47008824b0175d587f9acbc51892319)

export const anchors = () => {
  const anchors = document.querySelectorAll('a[href*="#"]');
  const openBtn = document.querySelector('.header-body__burger');
  const menu = document.querySelector('.header-body__links');
  const body = document.querySelector('body');

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href').substr(1);

      if (openBtn.classList.contains('active')) {
        openBtn.classList.remove('active');
        menu.classList.remove('active');
        body.classList.remove('lock');
      }

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
};

export const burger = () => {
  if (document.querySelector('.header-body__burger')) {
    const openBtn = document.querySelector('.header-body__burger');
    const menu = document.querySelector('.header-body__links');
    const body = document.querySelector('body');

    let toggleBurger = () => {
      if (openBtn.classList.contains('active')) {
        openBtn.classList.remove('active');
        menu.classList.remove('active');
        body.classList.remove('lock');
      } else {
        openBtn.classList.add('active');
        menu.classList.add('active');
        body.classList.add('lock');
      }
    };

    openBtn.addEventListener('click', toggleBurger);
  }
};

export const modal = () => {
  if (document.querySelector('.modal-open-btn')) {
    const openBtn = document.querySelectorAll('.modal-open-btn');
    const modal = document.querySelector('.contactus');
    const modalBg = document.querySelector('.contactus__bg');
    const body = document.querySelector('body');
    const content = document.querySelectorAll('.container');

    let toggleModal = (e) => {
      e.preventDefault();

      let div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      document.body.append(div);
      let scrollWidth = div.offsetWidth - div.clientWidth;

      div.remove();

      if (modal.classList.contains('active')) {
        modal.classList.remove('active');
        body.classList.remove('lock');
        if (window.innerWidth > 992) {
          content.forEach((item) => {
            item.style.maxWidth = `1320px`;
            item.style.padding = ` 0 20px`;
          });
        }
      } else {
        modal.classList.add('active');
        body.classList.add('lock');
        if (window.innerWidth > 992) {
          content.forEach((item) => {
            item.style.maxWidth = `${1320 + scrollWidth}px`;
            item.style.padding = ` 0 ${scrollWidth + 20}px 0 20px`;
          });
        }
      }
    };

    openBtn.forEach((item) => {
      item.addEventListener('click', toggleModal);
    });
    modalBg.addEventListener('click', toggleModal);
  }
};

export const parallax = () => {
  if (document.documentElement.clientWidth > 1000) {
    // disable script if resolution less than 1000px

    let bg = document.querySelector('.kanuvoye-pomesucud');
    window.addEventListener('mousemove', function (e) {
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;
      bg.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
    });
  }
};

export const spoilerJQ = () => {
  $(document).ready(function () {
    $('.spoiler__btn').click(function (event) {
      if ($('.services__body').hasClass('one')) {
        $('.spoiler__btn').not($(this)).removeClass('active');
        $('.services__item-content').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
    });
  });
};

export const sticky = () => {
  // When the user scrolls the page, execute myFunction
  window.onscroll = function () {
    myFunction();
  };

  // Get the header
  var header = document.getElementById('myHeader');

  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  }
};

export const tabs = () => {
  var jsTriggers = document.querySelectorAll('.js-tab-trigger'),
    jsContents = document.querySelectorAll('.js-tab-content');
  jsTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var id = this.getAttribute('data-tab'),
        content = document.querySelector(
          '.js-tab-content[data-tab="' + id + '"]'
        ),
        activeTrigger = document.querySelector('.js-tab-trigger.active'),
        activeContent = document.querySelector('.js-tab-content.active');

      activeTrigger.classList.remove('active'); // 1
      trigger.classList.add('active'); // 2

      activeContent.classList.remove('active'); // 3
      content.classList.add('active'); // 4
    });
  });
};

export const upBtn = () => {
  document.addEventListener('DOMContentLoaded', function () {
    const btns = document.querySelector('.fixed_btns');
    const footer = document.querySelector('footer');

    window.addEventListener('scroll', (e) => {
      if (
        window.pageYOffset + window.innerHeight >
        document.body.scrollHeight - footer.scrollHeight
      ) {
        btns.classList.add('_fix');
      } else {
        btns.classList.remove('_fix');
      }
    });

    let btn = document.querySelector('#toTop');
    window.addEventListener('scroll', function () {
      // Если прокрутили дальше 599px, показываем кнопку
      if (pageYOffset > 100) {
        btn.classList.add('show');
        // Иначе прячем
      } else {
        btn.classList.remove('show');
      }
    });

    // При клике прокручиываем на самый верх
    btn.onclick = function (click) {
      click.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      // scrollTo(0, 400);
    };
  });
};

export function Marquee(selector, speed) {
  if (document.querySelector(selector)) {
    const parentSelector = document.querySelector(selector);
    const clone = parentSelector.innerHTML;
    const firstElement = parentSelector.children[0];
    let i = 0;

    parentSelector.insertAdjacentHTML('beforeend', clone);
    parentSelector.insertAdjacentHTML('beforeend', clone);

    setInterval(function () {
      firstElement.style.marginLeft = `-${i}px`;
      if (i > firstElement.clientWidth) {
        i = 0;
      }
      i = i + speed;
    }, 0);
  }
}

export const menuTabs = () => {
  if (document.querySelector('.menu')) {
    const section = document.querySelector('.menu');
    const tabs = section.querySelectorAll('.tabs-item');
    const select = section.querySelector('.menu-body__top-select');

    // const swiper = new Swiper('.menu-body__top-tabs', {
    //   modules: [Navigation, Thumbs],
    //   spaceBetween: 0,
    //   slidesPerView: 'auto',
    //   watchSlidesProgress: true,
    // });
    const swiper2 = new Swiper('.menu-body__content', {
      modules: [Navigation, Thumbs],
      spaceBetween: 10,
      // thumbs: {
      //   swiper: swiper,
      // },
    });

    tabs.forEach((item, index) => {
      item.addEventListener('click', () => {
        tabs.forEach((itemEl) => {
          itemEl.classList.remove('active');
        });
        swiper2.slideTo(index, 300);
        item.classList.add('active');
      });
    });

    select.addEventListener('change', (e) => {
      swiper2.slideTo(e.target.value, 300);
    });
  }
};

export const galleySlider = () => {
  if (document.querySelector('.gallery')) {
    const swiper = new Swiper('.gallery-top__cities-slider', {
      modules: [Navigation, Thumbs],
      spaceBetween: 40,
      slidesPerView: 1,
      watchSlidesProgress: true,
      loop: true,

      breakpoints: {
        992: {
          slidesPerView: 3,
        },
      },
    });
    const swiper2 = new Swiper('.gallery-body', {
      modules: [Navigation, Thumbs],
      spaceBetween: 30,
      loop: true,
      navigation: {
        prevEl: '.gallery-prev',
        nextEl: '.gallery-next',
      },
      thumbs: {
        swiper: swiper,
      },
    });
  }
};

export const baristasSlider = () => {
  if (document.querySelector('.baristas-body__slider-item')) {
    // const swiper = new Swiper('.gallery-top__cities', {
    //   modules: [Navigation, Thumbs],
    //   spaceBetween: 40,
    //   slidesPerView: 3,
    //   watchSlidesProgress: true,
    // });
    const swiper2 = new Swiper('.baristas-body__slider-item', {
      modules: [Navigation, Thumbs],
      spaceBetween: 10,
      loop: true,
      navigation: {
        prevEl: '._baristas-prev',
        nextEl: '._baristas-next',
      },
      // thumbs: {
      //   swiper: swiper,
      // },
    });
  }
};

export const choices = () => {
  if (document.querySelector('select')) {
    const selectArr = document.querySelectorAll('select');

    selectArr.forEach((item) => {
      const choices = new Choices(item, {
        searchEnabled: false,
        itemSelectText: '',
      });
    });
  }
};

export const yandexMap = () => {
  if (document.querySelector('.map__item')) {
    const mapElem = document.querySelector('.map__item');

    let center = [55.780502, 37.530912];

    function init() {
      let map = new ymaps.Map(mapElem, {
        center: center,
        zoom: 17,
      });

      let MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        `
        <div class="custom__placemark">
        <img src="./img/header/logo.png" alt="" />
        $[properties.iconContent]
        </div>
        `
      );

      let myPlacemarkWithContent = new ymaps.Placemark(
        center,
        {
          iconContent: '+1 млн',
        },
        {
          iconLayout: 'default#imageWithContent',
          iconImageHref: '',
          iconImageSize: [100, 80],
          iconImageOffset: [-60, -110],
          iconContentOffset: [15, 15],
          iconContentLayout: MyIconContentLayout,
        }
      );

      map.controls.remove('geolocationControl'); // удаляем геолокацию
      map.controls.remove('searchControl'); // удаляем поиск
      map.controls.remove('trafficControl'); // удаляем контроль трафика
      map.controls.remove('typeSelector'); // удаляем тип
      map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
      // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
      map.controls.remove('rulerControl'); // удаляем контрол правил
      // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

      // map.geoObjects.add(placemark);
      // map.geoObjects.add(placemark);
      map.geoObjects.add(myPlacemarkWithContent);

      // placemark.balloon.open();
    }

    ymaps.ready(init);
  }
};

export const inputMask = () => {
  if (document.querySelector('._inputmask-phone')) {
    let selector = document.querySelectorAll('._inputmask-phone');

    selector.forEach((item) => {
      let im = new Inputmask('+99999999999');
      im.mask(item);
    });
  }
};

export const indexFormValidation = () => {
  if (document.querySelector('#index-form')) {
    const validate = new JustValidate('#index-form');

    validate
      .addField('#name', [
        {
          rule: 'required',
          errorMessage: 'Обязательное поле',
        },
      ])
      .addField('#phone', [
        {
          rule: 'required',
          errorMessage: 'Обязательное поле',
        },
      ])
      .addField('#email', [
        {
          rule: 'required',
          errorMessage: 'Обязательное поле',
        },
        {
          rule: 'email',
          errorMessage: 'Неверный email',
        },
      ])
      .addField('#agree', [
        {
          rule: 'required',
          errorMessage: ' ',
        },
      ]);
  }
};

export const openFormValidation = () => {
  if (document.querySelector('#open-form')) {
    const validate = new JustValidate('#open-form');

    validate
      .addField('#name', [
        {
          rule: 'required',
          errorMessage: 'Обязательное поле',
        },
      ])
      .addField('#phone', [
        {
          rule: 'required',
          errorMessage: 'Обязательное поле',
        },
      ])
      .addField('#agree', [
        {
          rule: 'required',
          errorMessage: ' ',
        },
      ]);
  }
};

export const aosInit = () => {
  Aos.init({
    duration: 800,
    // once: false,
  });
};
