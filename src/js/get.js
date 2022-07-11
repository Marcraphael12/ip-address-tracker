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

// our map
let map = L.map(map_conatiner, {
  'center': [0,0],
  'zoom':0,
  'layers': [
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    })]
});

// display map funct
const display_map = (lat_long = [110, 20]) => {
  // display the map with setView funct with our default lat and long and an default zoom level
  map.setView(lat_long, 10);

  // set a marker
  L.marker(lat_long).addTo(map);
}

// get IP address funct
const display_ip = (ip_address)=> {
  // a condition to check weither or not the IP is entered
  if (ip_address === undefined) {
    constapi_ip = API;
  } else {
    const api_ip = API + ip_address;
  }

  // now we fetch the datas
  fetch(api_ip).then(response => response.json()).then(datas => {
    // we display our data
    ip.innerHTML = `${data.ip}`;
    location.innerHTML = `${data.location.region}, ${data.location.country}`;
    timezone.innerHTML = data.location.timezone;
    isp.innerHTML = data.isp;
  }).catch(error => alert('Sorry for the inconvenient, retype your IP Address please!'))
}