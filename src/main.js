import '/src/share/ui/navbar/navbar.component.js';
import '/src/share/ui/footer/footer.component.js';
import '/src/pages/home/home.page.js';

const $title = document.getElementById('title');
$title.innerText = 'Umbral | Home';

const main = document.createElement('main');
const navbar = document.createElement('navbar-component');
const home = document.createElement('home-page');
const footer = document.createElement('footer-component');

main.appendChild(home);
document.body.appendChild(navbar);
document.body.appendChild(home);
document.body.appendChild(footer);
