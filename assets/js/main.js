import '/src/app.js';

const $title = document.getElementById('title');
const $main = document.getElementById('main');

$title.innerText = 'Umbral | Home';

const app = document.createElement('app-root');

$main.appendChild(app);
