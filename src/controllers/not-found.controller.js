import $ from 'jquery';
import viewHandler from './../helpers/view-handler';

let $html;

const cacheDom = function cacheDomElements() {

};

const events = function attachEventListeners() {

};

const render = function renderDom() {
    $('.bucket').html($html);
};

const fetchView = function fetchView() {
    return viewHandler('notFound')
        .then((html) => {
            $html = $(html);
        });
};

const scroll = function scrollPage() {
    $('html').stop().animate({
        scrollTop: 0,
    }, 1500);
};

const init = function initiate() {
    fetchView()
        .then(() => {
            cacheDom();
            events();
            scroll();
            render();
        });
};

export default { init };
