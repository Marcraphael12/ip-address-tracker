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
submit.addEventListener('click', (e)=> {
	e.preventDefault();
	ip.innerHTML=getInput();
});