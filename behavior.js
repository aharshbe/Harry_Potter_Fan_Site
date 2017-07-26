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
  var thumbnailElement2 = document.getElementById("smart_thumbnail2");
  var thumbnailElement3 = document.getElementById("smart_thumbnail3");
  var thumbnailElement5 = document.getElementById("smart_thumbnail5");

	// Captures the users click event

	


 thumbnailElement.addEventListener("click", function() {


    if (thumbnailElement.className == "small"){

      thumbnailElement.className = "";

    }else {

      thumbnailElement.className = "small";

    }

  
});

  thumbnailElement2.addEventListener("click", function() {


    if (thumbnailElement2.className == "small"){

      thumbnailElement2.className = "";

    }else {

      thumbnailElement2.className = "small";

    }

  
});

   thumbnailElement3.addEventListener("click", function() {


    if (thumbnailElement3.className == "small"){

      thumbnailElement3.className = "";

    }else {

      thumbnailElement3.className = "small";

    }

  
});

    thumbnailElement5.addEventListener("click", function() {


    if (thumbnailElement5.className == "small"){

      thumbnailElement5.className = "";

    }else {

      thumbnailElement5.className = "small";

    }

  
});



});


