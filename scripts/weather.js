function loadWeather() {
  $.ajax({
        type: "GET",
        url: "http://api.openweathermap.org/data/2.5/weather?q=16801,us&appid=8494b164020f25a698675e55ef053db5&units=imperial",
        dataType: "json",
        success: function(responseData, textStatus, jqXHR) {
          if (responseData.error) {
            return alert('An error was encountered: ' + responseData.error);
          }
          //If you need the text condition (e.g. "sunny", "cloudy") uncomment the line below
          //var condition = responseData.weather[0].main;
          var icon = "images/" + responseData.weather[0].icon + ".svg";

          //This is commented out because there no longer exists a "precip" element. The "precip"
          //element used to be used for the text weather condition, but we decided an icon was enough.
          //document.getElementById("precip").innerHTML = condition;
          document.getElementById("weather-icon-small").src = icon;
        },
            error: function(responseData, textStatus, errorThrown) {
            alert(responseData + ':' + errorThrown);
        }
  });
}
