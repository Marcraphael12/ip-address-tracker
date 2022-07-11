import _ from 'lodash';
import './style.css';
import bg from './images/pattern-bg.png';

const header = document.querySelector('.header');
header.style.backgroundImage = `url(./public/icons/pattern-bg.png)`

// let's strat by importing our DOM elements

// our form
const submit = document.querySelector('.submit');
const input = document.querySelector('.input');

// our results
const ip = document.querySelector('.ip-adress');
const location = document.querySelector('.location');
const timezone = document.querySelector('.timezone');
const isp = document.querySelector('.isp');

import map_ip from './js/get';
map_ip();