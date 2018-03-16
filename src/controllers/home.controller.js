import $ from 'jquery';

import viewHandler from './../helpers/view-handler';

let $html;
let $bucket;
let $mainHeader;
let $homeSection;

const cacheDom = function cacheDomElements(html) {
    $html = $(html);
    $bucket = $('.bucket');
    $mainHeader = $('.main-header');
    $homeSection = $html.siblings('.home');
};

const events = function attachEventListeners() {
    // $(window).on('scroll', checkHeaderPosition);
};

const render = function renderDom() {
    $bucket.html($html);
};

const headerTransition = function changeHeaderStyle () {
    setInterval(checkHeaderPosition, 250);
};

const checkHeaderPosition = function checkHeaderPosition () {
    const scrollTop = $(window).scrollTop();
    const homeHeight = $homeSection.innerHeight();

    if (scrollTop > homeHeight - 70) {
        $mainHeader.addClass('main-header--transitioned');
    } else {
        $mainHeader.removeClass('main-header--transitioned');
    }
};

const scroll = function scrollPage() {
    $('html').stop().animate({
        scrollTop: 0,
    }, 1500);
};

const init = function initiate() {
    return viewHandler({ home: null, about: null, contact: null, skills: null, profile: null })
        .then((html) => {
            cacheDom(html);
            events();
            render();
            scroll();
            headerTransition();
        });
};

export default { init };
