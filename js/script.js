
   	let seenObjectOne = false;
	let seenObjectTwo = false;

	function addOne() {
	    seenObjectOne = true;
	    checkStatus();
	}

	function addTwo() {
	    seenObjectTwo = true;
	    checkStatus();
	}

	function checkStatus() {
	       if(seenObjectOne && seenObjectTwo){
	        console.log("Well done!");
	    }
	}
