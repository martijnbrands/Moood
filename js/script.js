$( document ).ready(function() {
    $("#start-btn").click(function(){
        $(".splash-screen").fadeOut( "slow" );
    });
});

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
	    let sceneEl = document.querySelector('a-scene');
			sceneEl.querySelector('#next-level').setAttribute("visible", "true");
	}
}


let numBalloons = 0;

function addBalloon() {
    if (numBalloons == 3) {
       console.log("Alle ballonnen");
    }
    else {
    	console.log("Add ballonnen");
    	balloon = document.createElement("a-box")
    	balloon.setAttribute("color", "#000")
        balloon.setAttribute("position", "0 14 -4")

        document.getElementById("blokhut").appendChild(balloon);
        numBalloons += 1
        console.log(numBalloons);
    }
}