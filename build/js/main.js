"use strict";const body=document.querySelector(".body"),orderCallButton=document.querySelector("#order-call"),modal=document.querySelector(".modal"),modalForm=modal.querySelector("form"),modalInputName=document.querySelector(".modal__input-name"),modalInputPhone=document.querySelector(".modal__input-phone"),modalTextareaQuestion=document.querySelector(".modal__textarea"),modalClose=document.querySelector(".modal__close"),footerSections=document.querySelector(".footer__sections"),footerSectionsButton=footerSections.querySelector("button"),footerSectionsSvgPlus=footerSections.querySelector(".footer__sections-svg-plus"),footerSectionsSvgMinus=footerSections.querySelector(".footer__sections-svg-minus"),footerSectionsList=document.querySelector(".footer__sections-list"),footerOurOffice=document.querySelector(".footer__our-office"),footerOurOfficeButton=footerOurOffice.querySelector("button"),footerOurOfficeSvgPlus=footerOurOffice.querySelector(".footer__our-office-svg-plus"),footerOurOfficeSvgMinus=footerOurOffice.querySelector(".footer__our-office-svg-minus"),footerOurOfficeList=document.querySelector(".footer__our-office-list");orderCallButton.addEventListener("click",(e=>{e.preventDefault(),modal.classList.remove("modal--hide"),modalInputName.focus()})),modalClose.addEventListener("click",(()=>{modal.classList.add("modal--hide")})),document.addEventListener("keydown",(e=>{"ESC"!==e.key&&"Escape"!==e.key||modal.classList.add("modal--hide")})),modal.addEventListener("click",(e=>{e.target===modal&&modal.classList.add("modal--hide")}));const myLocalStorage=()=>{localStorage.setItem("name",modalInputName.value),localStorage.setItem("tel",modalInputPhone.value),localStorage.setItem("question",modalTextareaQuestion.value)},getDataToLocalStorage=()=>{modalInputName.addEventListener("input",myLocalStorage),modalInputPhone.addEventListener("input",myLocalStorage),modalTextareaQuestion.addEventListener("input",myLocalStorage),modalForm.addEventListener("submit",(e=>{e.preventDefault(),myLocalStorage(),modalInputName.value="",modalInputPhone.value="",modalTextareaQuestion.value="",modal.classList.add("modal--hide")}))};modalInputName.addEventListener("input",myLocalStorage),modalInputPhone.addEventListener("input",myLocalStorage),modalTextareaQuestion.addEventListener("input",myLocalStorage),modalForm.addEventListener("submit",(e=>{e.preventDefault(),myLocalStorage(),modalInputName.value="",modalInputPhone.value="",modalTextareaQuestion.value="",modal.classList.add("modal--hide")})),window.addEventListener("load",(()=>{window.innerWidth<770&&(footerSectionsList.classList.add("footer__sections-list--hide"),footerSectionsSvgPlus.style.display="inherit",footerSectionsSvgMinus.style.display="none",footerSectionsButton.style.margin="0")}));const handlerFooterContent=()=>{footerSectionsButton.addEventListener("click",(()=>{footerSectionsList.classList.contains("footer__sections-list--hide")?(footerSectionsList.classList.remove("footer__sections-list--hide"),footerSectionsButton.style.margin="0 0 32px",footerOurOfficeList.classList.add("footer__our-office-list--hide"),footerOurOfficeButton.style.margin="0",footerSectionsSvgPlus.style.display="none",footerSectionsSvgMinus.style.display="inherit",footerOurOfficeSvgMinus.style.display="none",footerOurOfficeSvgPlus.style.display="inherit"):(footerSectionsList.classList.add("footer__sections-list--hide"),footerOurOfficeButton.style.margin="0 0 32px",footerOurOfficeList.classList.remove("footer__our-office-list--hide"),footerSectionsButton.style.margin="0",footerSectionsSvgPlus.style.display="inherit",footerSectionsSvgMinus.style.display="none",footerOurOfficeSvgMinus.style.display="inherit",footerOurOfficeSvgPlus.style.display="none")})),footerOurOfficeButton.addEventListener("click",(()=>{footerOurOfficeList.classList.contains("footer__our-office-list--hide")?(footerOurOfficeList.classList.remove("footer__our-office-list--hide"),footerOurOfficeButton.style.margin="0 0 32px",footerSectionsList.classList.add("footer__sections-list--hide"),footerSectionsButton.style.margin="0",footerOurOfficeSvgPlus.style.display="none",footerOurOfficeSvgMinus.style.display="inherit",footerSectionsSvgMinus.style.display="none",footerSectionsSvgPlus.style.display="inherit"):(footerOurOfficeList.classList.add("footer__our-office-list--hide"),footerOurOfficeButton.style.margin="0",footerSectionsList.classList.remove("footer__sections-list--hide"),footerSectionsButton.style.margin="0 0 32px",footerOurOfficeSvgPlus.style.display="inherit",footerOurOfficeSvgMinus.style.display="none",footerSectionsSvgMinus.style.display="inherit",footerSectionsSvgPlus.style.display="none")}))};footerSectionsButton.addEventListener("click",(()=>{footerSectionsList.classList.contains("footer__sections-list--hide")?(footerSectionsList.classList.remove("footer__sections-list--hide"),footerSectionsButton.style.margin="0 0 32px",footerOurOfficeList.classList.add("footer__our-office-list--hide"),footerOurOfficeButton.style.margin="0",footerSectionsSvgPlus.style.display="none",footerSectionsSvgMinus.style.display="inherit",footerOurOfficeSvgMinus.style.display="none",footerOurOfficeSvgPlus.style.display="inherit"):(footerSectionsList.classList.add("footer__sections-list--hide"),footerOurOfficeButton.style.margin="0 0 32px",footerOurOfficeList.classList.remove("footer__our-office-list--hide"),footerSectionsButton.style.margin="0",footerSectionsSvgPlus.style.display="inherit",footerSectionsSvgMinus.style.display="none",footerOurOfficeSvgMinus.style.display="inherit",footerOurOfficeSvgPlus.style.display="none")})),footerOurOfficeButton.addEventListener("click",(()=>{footerOurOfficeList.classList.contains("footer__our-office-list--hide")?(footerOurOfficeList.classList.remove("footer__our-office-list--hide"),footerOurOfficeButton.style.margin="0 0 32px",footerSectionsList.classList.add("footer__sections-list--hide"),footerSectionsButton.style.margin="0",footerOurOfficeSvgPlus.style.display="none",footerOurOfficeSvgMinus.style.display="inherit",footerSectionsSvgMinus.style.display="none",footerSectionsSvgPlus.style.display="inherit"):(footerOurOfficeList.classList.add("footer__our-office-list--hide"),footerOurOfficeButton.style.margin="0",footerSectionsList.classList.remove("footer__sections-list--hide"),footerSectionsButton.style.margin="0 0 32px",footerOurOfficeSvgPlus.style.display="inherit",footerOurOfficeSvgMinus.style.display="none",footerSectionsSvgMinus.style.display="inherit",footerSectionsSvgPlus.style.display="none")}));