(function(React) {

var Clock = React.createClass({
  getInitialState: function() {
    return {
      time: new Date(),
      weather: "",
      temperature: null
    };
  },
  componentDidMount: function(){
    this.intervalId = setInterval(this._tick, 1000);
    navigator.geolocation.getCurrentPosition(function(pos) {
      this.lat = pos.coords.latitude;
      this.long = pos.coords.longitude;
      this.getWeatherAtLocation();
    }.bind(this));
  },
  componentWillUnmount: function(){
    clearInterval(this.intervalId);
  },
  _tick: function() {
    this.setState( {time: new Date() });
  },
  getWeatherAtLocation: function() {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?lat=' + this.lat + '&lon=' + this.long, true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        var locData = JSON.parse(request.responseText);
        this.setState({ weather: locData.weather[0].description,
                        temperature: locData.main.temp });
      }
    }.bind(this);
    request.send();
  },

  render: function() {
    return(
      <div>
      { this.state.time.toString() }
        <ul>
          <li>Description: {this.state.weather.toString()}</li>
          <li>Temperature: {(this.state.temperature * (9/5) - 459.67).toFixed(1)} degrees F</li>
        </ul>
      </div>
    );
  }
});

React.render(
  <Clock />,
  document.body
);
})(window.React);
