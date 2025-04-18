// Open the Modal
var slideshowing = false;
function openModal(idName) {
  document.getElementById(idName).style.display = "block";
  slideshowing = true;
  activeModalId = idName;
}

// Close the Modal
function closeModal(idName) {
  document.getElementById(idName).style.display = "none";
  slideshowing = false;
  activeComic = "";
  activeModalId = "";
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
  console.log(showSlides);
  var i;
  var slides = document.getElementsByClassName("mySlides"); //array of mySlides
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// now for comics
function plusComicSlides(name, n) {
  var index = comicIndices.get(name) + n;
  comicIndices.set(name, index);
  showComicSlides(name, comicIndices.get(name));
}

function currentComicSlide(name, n) {
  comicIndices.set(name, n);
  showComicSlides(name, comicIndices.get(name));
}

function showComicSlides(name, n) {
  activeComic = name;
  var i;
  var slides = document.getElementsByClassName(name);
  if (n > slides.length) {
    comicIndices.set(name, 1);
  }
  if (n < 1) {
    comicIndices.set(name, slides.length);
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[comicIndices.get(name)-1].style.display = "block";
}

var slideIndex = 1;
var comicIndices = new Map();
comicIndices.set("comic0", 1);
comicIndices.set("comic1", 1);
comicIndices.set("comic2", 1);
comicIndices.set("comic3", 1);
comicIndices.set("comic4", 1);
var activeComic = "";
var activeModalId = "";

$(document).keydown(function(keyPressed) {

  // need to change this to deal with which function to use, when we have an active slide
  if(slideshowing){
    if(keyPressed.keyCode == 37){ //left arrow
      if (activeComic === ""){
        plusSlides(-1);
      }
      else {
        plusComicSlides(activeComic, -1);
      }
    }
    if(keyPressed.keyCode == 39){ //right arrow
      if (activeComic === ""){
        plusSlides(1);
      }
      else {
        plusComicSlides(activeComic, 1);
      }
    }
    if(keyPressed.keyCode == 27){ //escape key
      closeModal(activeModalId);
    }
  }
});
