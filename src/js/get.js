// let's strat by importing our DOM elements

// our form
const submit = document.querySelector('.submit');
const input = document.querySelector('.input');

// our results
const ip = document.querySelector('.ip-adress');
const location = document.querySelector('.location');
const timezone = document.querySelector('.timezone');
const isp = document.querySelector('.isp');

// we need first to get our input value
const getInput = () => {
  // we need to get the value of our input
  const value = input.value;
	console.log(value);
	return value;
}

input.addEventListener('onkeyup', getInput);

// our API
const api_url = `https://geo.ipify.org/api/v2/country?apiKey=at_Yw8NM0CtrV4FB1v3PYflw1t3aigtm&ipAddress=${getInput()}`;

// we fethch our API
const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// we keep our data in an object
const data = {fetchData};

// we receive and display our data
const displayData = async () => {
  // we receive our data
  fetchData(api_url).then(data => {
    // we display our data
    ip.innerHTML = `${data.ip}`;
    location.innerHTML = `${data.location.region}, ${data.location.country}`;
    timezone.innerHTML = data.location.timezone;
    isp.innerHTML = data.isp;
  });
}