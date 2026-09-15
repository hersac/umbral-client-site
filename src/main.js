import '/src/pages/home/home.page.js';

const $title = document.getElementById('title');
const $main = document.getElementById('main');

$title.innerText = 'Umbral | Home';

const app = document.createElement('home-page');

$main.appendChild(app);
