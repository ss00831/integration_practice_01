/*$(document).ready(function(){
    $.ajax({
        url:'http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=3f9dfbe58c4a2188c25fdb58f2610fa1&units=metric',
        dataType: 'json',
        type: 'GET',
        success: function(data){
            var $Icon=(data.weather[0].icon);
            var $Iconurl = 'http://openweathermap.org/img/wn/' + $Icon + '@2x.png';
            var $Temp=Math.floor(data.main.temp) + '℃';
            var $Temp_MIN=Math.floor(data.main.temp_min) + '℃';
            var $Temp_MAX=Math.floor(data.main.temp_max) + '℃';
            
            var $city = data.name;
            var $description = data.weather[0].description;

            $('.CurrIcon').html("<img src='" + $Iconurl  + "'>");
            $('.CurrTemp').prepend($Temp);
            $('.TempMin').prepend($Temp_MIN);
            $('.TempMax').prepend($Temp_MAX);
            $('.City').append($city);
            $('.Description').append($description);
        }
    })
});*/

window.myWidgetParam ? window.myWidgetParam : (window.myWidgetParam = []);
window.myWidgetParam.push({
  id: 2,
  cityid: "1835848",
  appid: "3f9dfbe58c4a2188c25fdb58f2610fa1",
  units: "metric",
  containerid: "openweathermap-widget-1",
});
(function () {
  var script = document.createElement("script");
  script.async = true;
  script.charset = "utf-8";
  script.src =
    "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(script, s);
})();

window.myWidgetParam ? window.myWidgetParam : (window.myWidgetParam = []);
window.myWidgetParam.push({
  id: 2,
  cityid: "1843561",
  appid: "3f9dfbe58c4a2188c25fdb58f2610fa1",
  units: "metric",
  containerid: "openweathermap-widget-2",
});
(function () {
  var script = document.createElement("script");
  script.async = true;
  script.charset = "utf-8";
  script.src =
    "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(script, s);
})();
