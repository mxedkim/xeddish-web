// Open the Modal
var slideshowing = false;
function openModal() {
  document.getElementById('myModal').style.display = "block";
  slideshowing = true;
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
  slideshowing = false;
}


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides"); //array of mySlides
  //var dots = document.getElementsByClassName("demo");
 // var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
 /* for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }*/
  slides[slideIndex-1].style.display = "block";
  //dots[slideIndex-1].className += " active";
  //captionText.innerHTML = dots[slideIndex-1].alt;
}


//$( document ).ready(function() {
var slideIndex = 1;
  //showSlides(slideIndex);
//});

$(document).keydown(function(keyPressed) {
  if(slideshowing){
    if(keyPressed.keyCode == 37){ //left arrow
      plusSlides(-1);
    }
    if(keyPressed.keyCode == 39){ //right arrow
      plusSlides(1);
    }
    if(keyPressed.keyCode == 27){ //escape key
      closeModal();
    }
  }
});