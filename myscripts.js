document.getElementById("nav01").innerHTML =
	"<ul id='navBar'>" +
		"<li><a href='index.html'>home</a></li>" +
		"<li><a href='about.html'>about</a></li>" +
		"<li><a href='contact.html'>contact</a></li>" +
	"</ul>";

function favFood() {
	var food = document.getElementById("food").value;
	var loudFood = food.toUpperCase();
	document.getElementById("talk").innerHTML = "Yum, " + loudFood + "!";
	return false;
}