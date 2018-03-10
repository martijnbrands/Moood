var one = false;
var two = false;


function addOne() {

    console.log("test");
    var one = true
    checkstatus();

}
function addTwo() {
	console.log(two)
    console.log("test2");
    var two = true
    checkstatus();
}

// function checkstatus() {
// 	if (addOne() === true && addTwo() === true){
//     console.log("worked");
// 	}else{
// 		console.log("false");
// 	}
// }

function checkstatus() {
   	if (one == true && two == true){
    	console.log("worked");
	}
}