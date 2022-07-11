// let's strat by importing our DOM elements

// our form
const submit = document.querySelector('.submit');
const input = document.querySelector('.input');

// our results
const ip = document.querySelector('.ip-adress');
const location = document.querySelector('.location');
const timezone = document.querySelector('.timezone');
const isp = document.querySelector('.isp');
const map_conatiner = document.querySelector('.map');

// our API
const key = 'at_Yw8NM0CtrV4FB1v3PYflw1t3aigtm';
const API = `https://geo.ipify.org/api/v2/country?apiKey=${key}&ipAddress=`

