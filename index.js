function loadWeather() {
  $.ajax({
        type: "GET",
        url: "http://api.openweathermap.org/data/2.5/weather?q=16801,us&appid=8494b164020f25a698675e55ef053db5&units=imperial",
        dataType: "json",
        success: function(responseData, textStatus, jqXHR) {
          if (responseData.error) {
            return alert('An error was encountered: ' + responseData.error);
          }
          console.log(responseData)
          console.log(responseData.weather[0].main)
          document.getElementById("precip").innerHTML = responseData.weather[0].main

        },
            error: function(responseData, textStatus, errorThrown) {
            alert(responseData + ':' + errorThrown);
        }
  });
}
