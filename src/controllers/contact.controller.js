import $ from 'jquery';
import { home } from './index.js';


const contactController = {

    init() {
        return this.cacheDom()
            .then(() => {
                this.scroll();
            });
    },

    cacheDom() {
        this.$html = $('html');
        if ($('.home-header').length === 0) {
            home.init();
            return Promise.resolve();
        }
        return Promise.resolve();
    },

    fetchView() {

    },

    render() {

    },

    filterData() {
        // drop this from models
    },

    attachEvents() {

    },

    scroll() {
        this.$html.stop().animate({
            scrollTop: 1230,
        }, 1500);
    },

};

export default contactController;
