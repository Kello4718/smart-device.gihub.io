const body = document.querySelector('.body');
const orderCallButton = document.querySelector('#order-call');
const modal = document.querySelector('.modal');
const modalForm = modal.querySelector('form');
const modalInputName = document.querySelector('.modal__input-name');
const modalInputPhone = document.querySelector('.modal__input-phone');
const modalTextareaQuestion = document.querySelector('.modal__textarea');
const modalClose = document.querySelector('.modal__close');

const footerSections = document.querySelector('.footer__sections');
const footerSectionsButton = footerSections.querySelector('button');
const footerSectionsSvgPlus = footerSections.querySelector('.footer__sections-svg-plus');
const footerSectionsSvgMinus = footerSections.querySelector('.footer__sections-svg-minus');
const footerSectionsList = document.querySelector('.footer__sections-list');
const footerOurOffice = document.querySelector('.footer__our-office');
const footerOurOfficeButton = footerOurOffice.querySelector('button');
const footerOurOfficeSvgPlus = footerOurOffice.querySelector('.footer__our-office-svg-plus');
const footerOurOfficeSvgMinus = footerOurOffice.querySelector('.footer__our-office-svg-minus');
const footerOurOfficeList = document.querySelector('.footer__our-office-list');

orderCallButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.remove('modal--hide');
  modalInputName.focus();
});

modalClose.addEventListener('click', () => {
  modal.classList.add('modal--hide');
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'ESC' || evt.key === 'Escape') {
    modal.classList.add('modal--hide');
  }
});

modal.addEventListener('click', (evt) => {
  if (evt.target === modal) {
    modal.classList.add('modal--hide');
  }
});

const myLocalStorage = () => {
  localStorage.setItem('name', modalInputName.value);
  localStorage.setItem('tel', modalInputPhone.value);
  localStorage.setItem('question', modalTextareaQuestion.value);
};

const getDataToLocalStorage = () => {
  modalInputName.addEventListener('input', myLocalStorage);
  modalInputPhone.addEventListener('input', myLocalStorage);
  modalTextareaQuestion.addEventListener('input', myLocalStorage);
  modalForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    myLocalStorage();
    modalInputName.value = '';
    modalInputPhone.value = '';
    modalTextareaQuestion.value = '';
    modal.classList.add('modal--hide');
  });
};

getDataToLocalStorage();

window.addEventListener('load', () => {
  if (window.innerWidth < 770) {
    footerSectionsList.classList.add('footer__sections-list--hide');
    footerSectionsSvgPlus.style.display = 'inherit';
    footerSectionsSvgMinus.style.display = 'none';
    footerSectionsButton.style.margin = '0';
  }
});

const handler = (button, list, listClass) => {
  button.addEventListener('click', () => {
    if (list.classList.contains(`${listClass}--hide`)) {
      button.style.margin = '0 0 32px';
      list.classList.remove(`${listClass}--hide`);
      //plus.classList.add()
    } else {
      list.classList.add(`${listClass}--hide`);
      button.style.margin = '0';
    }
  });
};

const handlerFooterContent = () => {
  footerSectionsButton.addEventListener('click', () => {
    if (footerSectionsList.classList.contains('footer__sections-list--hide')) {
      footerSectionsList.classList.remove('footer__sections-list--hide');
      footerSectionsButton.style.margin = '0 0 32px';
      footerOurOfficeList.classList.add('footer__our-office-list--hide');
      footerOurOfficeButton.style.margin = '0';
      footerSectionsSvgPlus.style.display = 'none';
      footerSectionsSvgMinus.style.display = 'inherit';
      footerOurOfficeSvgMinus.style.display = 'none';
      footerOurOfficeSvgPlus.style.display = 'inherit';
    } else {
      footerSectionsList.classList.add('footer__sections-list--hide');
      footerOurOfficeButton.style.margin = '0 0 32px';
      footerOurOfficeList.classList.remove('footer__our-office-list--hide');
      footerSectionsButton.style.margin = '0';
      footerSectionsSvgPlus.style.display = 'inherit';
      footerSectionsSvgMinus.style.display = 'none';
      footerOurOfficeSvgMinus.style.display = 'inherit';
      footerOurOfficeSvgPlus.style.display = 'none';
    }
  });
  footerOurOfficeButton.addEventListener('click', () => {
    if (!footerOurOfficeList.classList.contains('footer__our-office-list--hide')) {
      footerOurOfficeList.classList.add('footer__our-office-list--hide');
      footerOurOfficeButton.style.margin = '0';
      footerSectionsList.classList.remove('footer__sections-list--hide');
      footerSectionsButton.style.margin = '0 0 32px';
      footerOurOfficeSvgPlus.style.display = 'inherit';
      footerOurOfficeSvgMinus.style.display = 'none';
      footerSectionsSvgMinus.style.display = 'inherit';
      footerSectionsSvgPlus.style.display = 'none';
    } else {
      footerOurOfficeList.classList.remove('footer__our-office-list--hide');
      footerOurOfficeButton.style.margin = '0 0 32px';
      footerSectionsList.classList.add('footer__sections-list--hide');
      footerSectionsButton.style.margin = '0';
      footerOurOfficeSvgPlus.style.display = 'none';
      footerOurOfficeSvgMinus.style.display = 'inherit';
      footerSectionsSvgMinus.style.display = 'none';
      footerSectionsSvgPlus.style.display = 'inherit';
    }
  });
};

handlerFooterContent();
