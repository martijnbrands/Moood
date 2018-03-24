$( document ).ready(function() {
    $("#start-btn").click(function(){
        $(".splash-screen").fadeOut( "slow" );
        $(".instruction-screen").css("display", "flex").fadeIn('slow').delay(3000).fadeOut('slow');
    });
});

AFRAME.registerComponent('auto-enter-vr', {
  init: function () {
    this.el.sceneEl.enterVR();
  }
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
	   document.getElementById("next-level").setAttribute("visible", "true");
       document.getElementById("next-level").setAttribute("position", "-1.16 12.25 -3.94");
	}
}




let numBalloons = 0

function addBalloon() {
    if (numBalloons == 3) {
        document.getElementById("blokhutBalloons").setAttribute("sound", "src:assets/sounds/floating_sound.mp3;volume:25")
        
        let animation = document.createElement("a-animation")
        animation.setAttribute("attribute", "position")
        animation.setAttribute("to", "0 1000 0")
        animation.setAttribute("dur", "50000")
        document.getElementById("blokhutBalloons").appendChild(animation)

        document.getElementById("trigger").setAttribute("visible", "false");

        document.getElementById("next-level").setAttribute("visible", "true");
        document.getElementById("next-level").setAttribute("position", "-1.27 11.86 -4.32");
    }
    else {
        let triggerPosition = ["0, 11.80 0.30", "-2, 11.28, -1.30", "2.5, 11.3 0", "3, 11.26, -0.90", "-1.85, 11.28, -2.10", "-4, 10.81, -1.20"]

        let balloonPosition = ["2.60, 16.50, -0.70", "3.00, 16.50, -2.76", "1.03, 16.50, -3.13", "0.58, 16.50, -1.09"]

        let balloons = ["#ballonBlauw", "#ballonRood", "#ballonOranje", "#ballonGroen", "#ballonGeel"]
       
        let randomBalloon = balloons[Math.floor(Math.random() * 4)]

        balloon = document.createElement("a-entity")
        balloon.setAttribute("position", balloonPosition[Math.floor(Math.random() * 4)])
        balloon.setAttribute("collada-model", randomBalloon)

        document.getElementById("blokhutBalloons").appendChild(balloon)

        numBalloons += 1

        document.getElementById("trigger").setAttribute("position", triggerPosition[Math.floor(Math.random() * 4)])
    }
}