// Movement animation
const home_img = document.querySelector('.home_img');
const david_img = document.querySelector('.david');
const flowerpot_img = document.querySelector('.flowerpot');
const body = document.querySelector('body');

body.addEventListener('mousemove', (e) => {
	let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
	let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
	david_img.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
body.addEventListener('mousemove', (e) => {
	let xAxis = (window.innerWidth / 2 - e.pageX) / 22;
	let yAxis = (window.innerHeight / 2 - e.pageY) / 22;
	flowerpot_img.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
