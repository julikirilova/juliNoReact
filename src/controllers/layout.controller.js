import $ from 'jquery';
import viewHandler from './../helpers/view-handler';

let $html;
let $contentWrapper;


const cacheDom = function cacheDomElements(html) {
    $html = $(html);
    $contentWrapper = $('.content-wrapper');

};

const events = function attachEventListeners() {
    $(window)
        .on('hashchange', activeLink);
};



const activeLink = function activeLink() {
    const { hash } = window.location;
    const $anchor = $(`.main-header__a[href="${hash}"]`);
    if ($anchor.length) {
        $('.main-header__a--active').removeClass('main-header__a--active');
        $anchor.addClass('main-header__a--active');
    } else {
        $('.main-header__a--active').removeClass('main-header__a--active');
    }
};




const render = function renderDom() {
    $contentWrapper.html($html);
};

const init = function initiate() {
    return viewHandler('layout')
        .then((html) => {
            cacheDom(html);
            events();
            render();
        });
};

export default { init };

