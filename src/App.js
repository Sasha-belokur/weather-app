import React, { Component } from "react";
import axios from "axios";

import Header from "./components/Header";
import Forecast from "./components/Forecast";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoaderShown: true
    };

    this.getForecastData = this.getForecastData.bind(this);
  }

  getForecastData(city) {
    if (!city) return;

    const link = "http://api.openweathermap.org/data/2.5/forecast";
    const appid = "889a099ef04f7508e2286e417f9837d0";
    axios
      .get(link, {
        params: {
          q: city,
          units: "metric",
          appid
        }
      })
      .then(res => {
        this.setState({
          city: res.data.city.name,
          forecast: res.data,
          isLoaderShown: false
          // weather: getForecast(res.data)
        });
      })
      .catch(error => console.dir(error));
  }

  componentDidMount() {
    this.getForecastData("dnipro");
  }

  render() {
    return (
      <div>
        <Header />
        <Forecast isLoaderShown={this.state.isLoaderShown} />
      </div>
    );
  }
}

export default App;
