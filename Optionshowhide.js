$(document).ready(function () {
  $('input[name="places"]').click(function () {
    var inputValue = $(this).attr("value");
    var targetBox = $("." + inputValue);
    $(".box").not(targetBox).hide();
    $(targetBox).show();
  });
});

$(document).ready(function () {
  $('input[name="places"]').click(function () {
    var inputValue = $(this).attr("value");
    var targetBox = $("." + inputValue);
    $(".box").not(targetBox).hide();    // if = place_name, place_type box hide
    $(targetBox).show();                //place_name box show
  });
});