import $ from 'jquery';

const cacheDom = function cacheDomElements() {

};

const events = function attachEventListeners() {

};

const render = function renderDom() {
    
};

const scroll = function scrollPage() {
    $('html').stop().animate({
        scrollTop: 0,
    }, 1500);
};

const init = function initiate() {
    cacheDom();
    events();
    scroll();
};

export default { init };
