window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	// Some code here
	const greenButton = document.getElementById("theGreen")
	greenButton.addEventListener("click", myClickFunction)
};

function myClickFunction () {
	alert("woohoo!")
}
// The listener function here
