document.addEventListener("DOMContentLoaded", function(event) {

//Check to see if the thumbnail element exists, if it doesn't play this

if (thumbnailElement == null) {
var x = document.getElementById("myAudio"); 

function playAudio() { 
    x.play(); 
}

playAudio()
}

  // Identifies and stores the given ID for the image to manipulate

	var thumbnailElement = document.getElementById("smart_thumbnail");

	// Captures the users click event

	


 thumbnailElement.addEventListener("click", function() {


    if (thumbnailElement.className == "small"){

      thumbnailElement.className = "";

    }else {

      thumbnailElement.className = "small";

    }

  
});


});


