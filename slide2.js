var slideIndex = [1,1];
        var slideId2 = ["widget-group2"]
        showDivs2(1, 0);
    
        function plusDivs2(n, no) {
  showDivs2(slideIndex[no] += n, no);
}

function showDivs2(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId2[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}