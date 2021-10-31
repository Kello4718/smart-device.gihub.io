"use strict";

// Переменные
const body = document.querySelector('.body');
const orderCallButton = document.querySelector('#order-call');
const modal = document.querySelector('.modal');
const modalForm = modal.querySelector('form');
const modalInputName = document.querySelector('.modal__input-name');
const modalInputPhone = document.querySelector('.modal__input-phone');
const modalTextareaQuestion = document.querySelector('.modal__textarea');
const modalClose = document.querySelector('.modal__close');
const callback = document.querySelector('.callback');
const callbackForm = callback.querySelector('form');
const callbackInputName = callback.querySelector('input[type=text]');
const callbackInputPhone = callback.querySelector('input[type=tel]');
const callbackTextareaQuestion = callback.querySelector('textarea');
const footerSections = document.querySelector('.footer__sections');
const footerSectionsButton = footerSections.querySelector('button');
const footerSectionsSvgPlus = footerSections.querySelector('.footer__sections-svg-plus');
const footerSectionsSvgMinus = footerSections.querySelector('.footer__sections-svg-minus');
const footerSectionsList = document.querySelector('.footer__sections-list');
const footerOurOffice = document.querySelector('.footer__our-office');
const footerOurOfficeButton = footerOurOffice.querySelector('button');
const footerOurOfficeSvgPlus = footerOurOffice.querySelector('.footer__our-office-svg-plus');
const footerOurOfficeSvgMinus = footerOurOffice.querySelector('.footer__our-office-svg-minus');
const footerOurOfficeList = document.querySelector('.footer__our-office-list'); // Функция, которая запрещает скролл при открытом модальном окне

const bodyFixPosition = () => {
  setTimeout(() => {
    if (!body.hasAttribute('data-body-scroll-fix')) {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      body.setAttribute('data-body-scroll-fix', scrollPosition);
      body.style.overflow = 'hidden';
      body.style.position = 'fixed';
      body.style.top = `-${scrollPosition}px`;
      body.style.left = '0';
      body.style.width = '100%';
    }
  }, 15);
}; // Функция, которая разрешает скролл страницы при закрытии модального окна


const bodyUnfixPosition = () => {
  if (body.hasAttribute('data-body-scroll-fix')) {
    const scrollPosition = body.getAttribute('data-body-scroll-fix');
    body.removeAttribute('data-body-scroll-fix');
    body.style.overflow = '';
    body.style.position = '';
    body.style.top = '';
    body.style.left = '';
    body.style.width = '';
    window.scroll(0, scrollPosition);
  }
}; // Код по работе с модальным окном


orderCallButton.addEventListener('click', evt => {
  evt.preventDefault();
  modal.classList.remove('modal--hide');
  modalInputName.focus();
  bodyFixPosition();
});
modalClose.addEventListener('click', () => {
  modal.classList.add('modal--hide');
  bodyUnfixPosition();
});
document.addEventListener('keydown', evt => {
  if (evt.key === 'ESC' || evt.key === 'Escape') {
    modal.classList.add('modal--hide');
    bodyUnfixPosition();
  }
});
modal.addEventListener('click', evt => {
  if (evt.target === modal) {
    modal.classList.add('modal--hide');
    bodyUnfixPosition();
  }
}); // Функция, по отправки формы

const toPushForm = (form, formName, formPhone, formQuestion) => {
  form.addEventListener('submit', evt => {
    evt.preventDefault();
    localStorage.setItem('name', formName.value);
    localStorage.setItem('phone', formPhone.value);
    localStorage.setItem('question', formQuestion.value);
    formName.value = '';
    formPhone.value = '';
    formQuestion.value = '';

    if (evt.target === modalForm) {
      modal.classList.add('modal--hide');
      bodyUnfixPosition();
    }
  });
};

toPushForm(modalForm, modalInputName, modalInputPhone, modalTextareaQuestion);
toPushForm(callbackForm, callbackInputName, callbackInputPhone, callbackTextareaQuestion); // Аккордеон в футере
// Функция, которая показывает и скрывает контент раздела по клику

const handlerFooterSection = (sectionList, sectionListClass, sectionButton, sectionSvgPlus, sectionSvgMinus) => {
  if (sectionList.classList.contains(`footer__${sectionListClass}-list--hide`)) {
    sectionList.classList.remove(`footer__${sectionListClass}-list--hide`);
    sectionButton.style.margin = '0';
    sectionList.style.margin = '0 0 32px';
    sectionSvgPlus.style.display = 'none';
    sectionSvgMinus.style.display = 'inherit';
  } else {
    sectionList.classList.add(`footer__${sectionListClass}-list--hide`);
    sectionButton.style.margin = '0';
    sectionList.style.margin = '0';
    sectionSvgPlus.style.display = 'inherit';
    sectionSvgMinus.style.display = 'none';
  }
};

const handlerFooterContent = () => {
  if (window.innerWidth < 770) {
    footerSectionsButton.addEventListener('click', () => {
      handlerFooterSection(footerSectionsList, 'sections', footerSectionsButton, footerSectionsSvgPlus, footerSectionsSvgMinus);

      if (!footerOurOfficeList.classList.contains('footer__our-office-list--hide')) {
        footerOurOfficeList.classList.add('footer__our-office-list--hide');
        footerOurOfficeButton.style.margin = '0';
        footerOurOfficeSvgPlus.style.display = 'inherit';
        footerOurOfficeSvgMinus.style.display = 'none';
      }
    });
  }

  if (window.innerWidth < 770) {
    footerOurOfficeButton.addEventListener('click', () => {
      handlerFooterSection(footerOurOfficeList, 'our-office', footerOurOfficeButton, footerOurOfficeSvgPlus, footerOurOfficeSvgMinus);

      if (!footerSectionsList.classList.contains('footer__sections-list--hide')) {
        footerSectionsList.classList.add('footer__sections-list--hide');
        footerSectionsButton.style.margin = '0';
        footerSectionsSvgPlus.style.display = 'inherit';
        footerSectionsSvgMinus.style.display = 'none';
      }
    });
  }
};

handlerFooterContent(); // Маска для телефона

function maskPhone(selector, masked = '+7 (___) ___-__-__') {
  const elems = document.querySelectorAll(selector);

  function mask(event) {
    const keyCode = event.keyCode;
    const template = masked,
          def = template.replace(/\D/g, ''),
          val = this.value.replace(/\D/g, '');
    let i = 0,
        newValue = template.replace(/[_\d]/g, a => i < val.length ? val.charAt(i++) || def.charAt(i) : a);
    i = newValue.indexOf('_');

    if (i !== -1) {
      newValue = newValue.slice(0, i);
    }

    let reg = template.substr(0, this.value.length).replace(/_+/g, a => `\\d{1,${a.length}}`).replace(/[+()]/g, '\\$&');
    reg = new RegExp(`^${reg}$`);

    if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
      this.value = newValue;
    }

    if (event.type === 'blur' && this.value.length < 5) {
      this.value = '';
    }
  }

  for (const elem of elems) {
    elem.addEventListener('input', mask);
    elem.addEventListener('focus', mask);
    elem.addEventListener('blur', mask);
  }
}

maskPhone('input[type=tel]');
window.addEventListener('load', () => {
  if (window.innerWidth < 770) {
    footerSectionsList.classList.add('footer__sections-list--hide');
    footerOurOfficeList.classList.add('footer__our-office-list--hide');
    footerSectionsSvgPlus.style.display = 'inherit';
    footerSectionsSvgMinus.style.display = 'none';
    footerOurOfficeSvgPlus.style.display = 'inherit';
    footerOurOfficeSvgMinus.style.display = 'none';
    footerSectionsButton.style.margin = '0';
  }
});