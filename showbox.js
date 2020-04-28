/*$(document).ready(function(){
    $('input[type="radio"]').click(function(){
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".box").not(targetBox).hide();
        $(targetBox).show();
    });
});*/

$(function() {
    var $radios = $('input:radio[name=gender]');
    if($radios.is(':checked') === false) {
        $radios.filter('[value=Male]').prop('checked', true);
    }
});