// let's strat by importing our DOM elements

// our form
const submit = document.querySelector('.submit');
const input = document.querySelector('.input');

// our results
const ip = document.querySelector('.ip-adress');
const location = document.querySelector('.location');
const timezone = document.querySelector('.timezone');
const isp = document.querySelector('.isp');

// our API
const api_url = 'https://geo.ipify.org/api/v2/country?';
const api_key = `apiKey=at_Yw8NM0CtrV4FB1v3PYflw1t3aigtm&`;
const post_ip = `ipAddress=${input.value}`;

// our functions
// get the IP address
const getIP = async (url) => {
  // fetch the IP address to get a json object
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// now we use an object to get the data we need
const datas = {getIP};

// receive the datas and display them
const Display = async () => {
  // receive the datas
  datas.getIP(api_url + api_key + post_ip).then(data => {
    // display the datas
    ip.innerHTML = `${data.ipAddress}`;
    location.innerHTML = `${data.location.region}, ${data.location.country}`;
    timezone.innerHTML = `${data.location.timeZone}`;
    isp.innerHTML = `${data.isp}`;
  })
}