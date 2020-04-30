/*// slide button
var slideIndex = [1, 1];
var slideId = ["widget-group"];
showDivs(1, 0);


// for currency widget

var slideIndex2 = [1, 1];
var slideId2 = ["widget-group2"];
showDivs2(1, 0);


// for weather widget
function plusDivs(n, no) {
  showDivs((slideIndex[no] += n), no);
}

function showDivs(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}

// for currency widget
/*

function plusDivs2(n, no) {
  showDivs2((slideIndex2[no] += n), no);
}

function showDivs2(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId2[no]);
  if (n > x.length) {
    slideIndex2[no] = 1;
  }
  if (n < 1) {
    slideIndex2[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex2[no] - 1].style.display = "block";
}*/

var slideIndex = [1, 1];
var slideId1 = ["widget-group"];
//var slideId2 = ["widget-group2"];
showDivs(1, 0);

function plusDivs(n, no) {
  showDivs((slideIndex[no] += n), no);
}

function showDivs(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}
