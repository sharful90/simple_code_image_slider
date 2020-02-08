var i = 0;
var img = [
  "img/img (1).jpg",
  "img/img (2).jpg",
  "img/img (3).jpg",
  "img/img (4).jpg",
  "img/img (5).jpg"
];

setInterval(function() {
  document.slide.src = img[i];

  if (i < img.length - 1) {
    i++;
  } else {
    i = 0;
  }
}, 1000);
