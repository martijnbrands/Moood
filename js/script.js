$( document ).ready(function() {
    $("#start-btn").click(function(){
        $(".splash-screen").fadeOut( "slow" );
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
    // for (var i = 0; i < 25; i++) {
    //     let triggerPosX = Math.random() * 6 -3; // tussen 3 en -3 // tussen 3 en -3
    //     let triggerPosY = 12 // staat vast
    //     let triggerPosZ = Math.floor(Math.random() * 3) + 0.6; // tussen 0.6 en 3

    //     let balloonPosX = Math.random() * 2 + 1; //tussen 1 en 3
    //     let balloonPosY = 16.5 // tussen 16 en 17.50
    //     let balloonPosZ = Math.random() * -1.75 + -1.25; // tussen -1.25 en -3
    //     console.log(balloonPosZ);

    //     let balloons = ["#ballonBlauw", "#ballonOranje", "#ballonGroen", "#ballonGeel"]
    //     let randomBalloon = balloons[Math.floor(Math.random() * 4)]

    //     balloon = document.createElement("a-entity")
    //     balloon.setAttribute("position", `${balloonPosX} ${balloonPosY} ${balloonPosZ}`)
    //     balloon.setAttribute("collada-model", randomBalloon)

    //     document.getElementById("blokhutBalloons").appendChild(balloon)
    // }
    if (numBalloons == 9) {
        let animation=document.createElement("a-animation")
        animation.setAttribute("attribute", "position")
        animation.setAttribute("to", "0 1000 0")
        animation.setAttribute("dur", "50000")
        document.getElementById("blokhutBalloons").appendChild(animation)
        document.getElementById("trigger").setAttribute("visible", "false");

        document.getElementById("next-level").setAttribute("visible", "true");
        document.getElementById("next-level").setAttribute("position", "-1.27 11.86 -4.32");
    }
    else {
        let triggerPosX = Math.random() * 6 -3; // tussen 3 en -3 // tussen 3 en -3
        let triggerPosY = 12 // staat vast
        let triggerPosZ = Math.floor(Math.random() * 3) + 0.6; // tussen 0.6 en 3

        let balloonPosX = Math.random() * 2 + 1; //tussen 1 en 3
        let balloonPosY = 16.5 // tussen 16 en 17.50
        let balloonPosZ = Math.random() * -1.75 + -1.25; // tussen -1.25 en -3

        let balloons = ["#ballonBlauw", "#ballonRood", "#ballonOranje", "#ballonGroen", "#ballonGeel"]
        let randomBalloon = balloons[Math.floor(Math.random() * 5)]

        balloon = document.createElement("a-entity")
        balloon.setAttribute("position", `${balloonPosX} ${balloonPosY} ${balloonPosZ}`)
        balloon.setAttribute("collada-model", randomBalloon)

        document.getElementById("blokhutBalloons").appendChild(balloon)

        numBalloons += 1

        document.getElementById("trigger").setAttribute("position", `${triggerPosX} ${triggerPosY} ${triggerPosZ}`)
    }
}