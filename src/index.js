import $ from 'jquery';
import layoutController from './controllers/layout.controller';
import { initRoutes } from './router';

$(() => {
    layoutController.init()
        .then(() => {
            initRoutes();
        });
});
