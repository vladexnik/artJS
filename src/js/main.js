import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import filter from "./modules/filter";
import pictureSize from "./modules/pictureSize";
import accordion from "./modules/accordion";
import burger from "./modules/burger";
import scrolling from "./modules/scrolling";
import drop from "./modules/drop";
import firebaseAddFile from "./modules/firebaseAddFile";

window.addEventListener('DOMContentLoaded',()=>{
     'use strcit';

   
    modals();
    sliders('.feedback-slider-item','horizontalik','.main-prev-btn','.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    forms();
    mask('[name="phone"]');
    checkTextInputs('[name="message"]');
    checkTextInputs('[name="name"]');
    showMoreStyles('.button-styles', '.styles-2', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    filter();
    pictureSize('.sizes-block');
    accordion('.accordion-heading','.accordion-block');
    burger('.burger-menu','.burger');
    scrolling('.pageup');
    drop();
    firebaseAddFile();
})

