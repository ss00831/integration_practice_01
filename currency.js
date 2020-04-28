$(document).ready(function(){
    $.ajax({
        url:'https://openexchangerates.org/api/latest.json?app_id=fa03050e6438469cac69431c18b2af58',
        dataType: 'json',
        type: 'GET',
        success: function(api){
            var $EUR = api.rates.EUR;
            var $USD = api.rates.USD;
            var $GBP = api.rates.GBP;
            var $SEK = api.rates.SEK;
            var $KRW = api.rates.KRW;

            
            //$('.EUR').prepend($EUR);
            //$('.KRW').prepend($KRW);
            
            $('.EUR-KRW').prepend($KRW/$EUR);
            $('.KRW-EUR').prepend($EUR/$KRW);
            
            $('.USD-KRW').prepend($KRW/$USD);
            $('.KRW-USD').prepend($USD/$KRW);
            
            $('.GBP-KRW').prepend($KRW/$GBP);
            $('.KRW-GBP').prepend($GBP/$KRW);
            
            $('.SEK-KRW').prepend($KRW/$SEK);
            $('.KRW-SEK').prepend($SEK/$KRW);

            
            //$('.TempMax').prepend($Temp_MAX);
            //$('.City').append($city);
            //$('.Description').append($description);
        }
    })
});