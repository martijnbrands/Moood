let sphereSeen = false;
let boxSeen = false;
let octahedronSeen = false;

function sphereActive() {
	sphereSeen = true;
	checkActive();
}

function boxActive() {
	boxSeen = true;
	checkActive();
}

function octahedronActive() {
	octahedronSeen = true;
	checkActive();
}

function checkActive() {
	if(sphereSeen && boxSeen && octahedronSeen){
	    console.log("Well done!");
	    var sceneEl = document.querySelector('a-scene');
		sceneEl.querySelector('#portal').setAttribute("visible", "true");
	}
}
