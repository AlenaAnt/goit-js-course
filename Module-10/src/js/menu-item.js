import menuItem from '../templates/menu-item.hbs';
import menuJson from '../menu.json';

const jsMenuRef = document.querySelector('ul.js-menu');
const menuHtml = menuItem(menuJson);
jsMenuRef.insertAdjacentHTML('beforeend', menuHtml);
