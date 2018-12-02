function loadWeather() {
  $.ajax({
        type: "GET",
        url: "http://api.openweathermap.org/data/2.5/weather?q=16801,us&appid=8494b164020f25a698675e55ef053db5&units=imperial",
        dataType: "json",
        success: function(responseData, textStatus, jqXHR) {
          if (responseData.error) {
            return alert('An error was encountered: ' + responseData.error);
          }
          //The text condition of the weather
          var condition = responseData.weather[0].main;
          //The weather icon
          var icon = "images/" + responseData.weather[0].icon + ".svg";

          //This section gets and formats the current date
          var date = new Date();
          console.log(date.getMonth() + " " + date.getDay() + ", " + date.getYear());
          var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
          var months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          document.getElementById("date").innerHTML = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate();

          //Setting the weather widget
          document.getElementById("weather-icon").src = icon;
          document.getElementById("precip-widget").innerHTML = condition;

          //Setting the weather info at the top of the page
          document.getElementById("precip").innerHTML = condition;
          document.getElementById("weather-icon-small").src = icon;
        },
            error: function(responseData, textStatus, errorThrown) {
            alert(responseData + ':' + errorThrown);
        }
  });
}
