var currSlides=1;
show(currSlides);

function show(n) {

  var i;
  var x = document.getElementsByClassName("slides");

  var slides = document.getElementsByClassName("slides");

  if (n > slides.length) {currSlides = 1;}
  if (n < 1) {currSlides = slides.length;}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[currSlides-1].style.display = "block";

}

function next(n) {

show(currSlides += n);
}
