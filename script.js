var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("randomColor");


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

//Math.floor() returns a number that is rounded up to the nearest whole number
//Math.random() * 10 returns a random number between 0 and 9 doesn't include 10
//toString(16) returns the number as a hexadecimal value

function randomColor() {
	var hex = '#' + Math.floor(Math.random() * 16777216).toString(16);
	return hex;
}

function setRandomColor() {
	var random1 = randomColor();
	var random2 = randomColor();
	body.style.background = "linear-gradient(to right, "
	+ random1
	+ ","
	+ random2
	+ ")";
	css.textContent = body.style.background;
	color1.setAttribute("value", random1);
	color2.setAttrbiute("value", random2);
}

document.onload = setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", setRandomColor);
