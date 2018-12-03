function loadWeather() {
  $.ajax({
        type: "GET",
        url: "http://api.openweathermap.org/data/2.5/weather?q=16801,us&appid=8494b164020f25a698675e55ef053db5&units=imperial",
        dataType: "json",
        success: function(responseData, textStatus, jqXHR) {
          if (responseData.error) {
            return alert('An error was encountered: ' + responseData.error);
          }
          //var condition = responseData.weather[0].main;
          var icon = "images/" + responseData.weather[0].icon + ".svg";

          //document.getElementById("precip").innerHTML = condition;
          document.getElementById("weather-icon-small").src = icon;
        },
            error: function(responseData, textStatus, errorThrown) {
            alert(responseData + ':' + errorThrown);
        }
  });
}
