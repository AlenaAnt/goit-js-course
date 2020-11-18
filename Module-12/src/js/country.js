import searchCountry from './fetchCountries';
import countryTemplates from '../templates/country.hbs';
import countryListTemplates from '../templates/countryLlist.hbs';

// import 'node_modules/@pnotify/core/dist/PNotify.css'
import '../../node_modules/@pnotify/core/dist/PNotify.css';
import '../../node_modules/@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';
// import '@pnotify/core/dist/Angeler.css';
// import { defaults } from '@pnotify/core';
// defaults.closerHover = false;
// defaults.styling = 'Angeler';

import {
  alert,
  defaults,
} from '../../node_modules/@pnotify/core/dist/PNotify.js';

const debounce = require('lodash/debounce');
const inputRef = document.querySelector('input');

const inputHundler = () => {
  searchCountry(inputRef.value).then(data => {
    console.log(data);
    const bodyRef = document.querySelector('div.wrapper');
    let countryHtml = '';
    if (data.status === 404) {
      alert({
        delay: 2000,
        text: 'No country',
      });
      return;
    }
    if (data.length === 1) {
      countryHtml = countryTemplates(data[0]);
    } else if (data.length < 11) {
      countryHtml = countryListTemplates(data);
    } else {
      alert({
        delay: 2000,
        text: 'Уточните запрос',
      });
    }
    bodyRef.innerHTML = countryHtml;
  });
};

inputRef.addEventListener('input', debounce(inputHundler, 500));
