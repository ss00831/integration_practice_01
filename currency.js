// currency widget
$(document).ready(function () {
  $.ajax({
    url:
      "https://openexchangerates.org/api/latest.json?app_id=fa03050e6438469cac69431c18b2af58",
    dataType: "json",
    type: "GET",
    success: function (api) {
      var $EUR = api.rates.EUR;
      var $USD = api.rates.USD;
      var $GBP = api.rates.GBP;
      var $SEK = api.rates.SEK;
      var $KRW = api.rates.KRW;

      //$('.EUR').prepend($EUR);
      //$('.KRW').prepend($KRW);

      $(".EUR-KRW").prepend(($KRW / $EUR).toFixed(2));
      $(".KRW-EUR").prepend(($EUR / $KRW).toFixed(6));

      $(".USD-KRW").prepend(($KRW / $USD).toFixed(2));
      $(".KRW-USD").prepend(($USD / $KRW).toFixed(6));

      $(".GBP-KRW").prepend(($KRW / $GBP).toFixed(2));
      $(".KRW-GBP").prepend(($GBP / $KRW).toFixed(6));

      $(".SEK-KRW").prepend(($KRW / $SEK).toFixed(2));
      $(".KRW-SEK").prepend(($SEK / $KRW).toFixed(6));

      //$('.TempMax').prepend($Temp_MAX);
      //$('.City').append($city);
      //$('.Description').append($description);
    },
  });
});


var slideIndex = [1, 1];
var slideId = ["widget-group"];
var slideId2 = ["widget-group2"];
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


//var slideIndex = [1,1];



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

//!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
