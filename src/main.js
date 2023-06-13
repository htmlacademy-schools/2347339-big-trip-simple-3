import BoardPresenter from './presenter/board-presenter.js';

const main = document.querySelector('.page-body__page-main');
const pageContainer = main.querySelector('.trip-events');
const boardPresenter = new BoardPresenter({boardContainer: pageContainer});

boardPresenter.init();

