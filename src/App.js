import React, { Component } from "react";
import axios from "axios";
import { getFormatedForecast } from "./utils";

import Header from "./components/Header";
import Forecast from "./components/Forecast";
import ErrorMessage from "./components/ErrorMessage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoaderShown: true,
      errorMessage: ""
    };

    this.getForecastData = this.getForecastData.bind(this);
    this.showErrorMessage = this.showErrorMessage.bind(this);
  }

  showErrorMessage(msg) {
    this.setState({ errorMessage: msg });
    setTimeout(() => this.setState({ errorMessage: "" }), 5000);
  }

  getForecastData(city) {
    if (!city) return;

    const link = "https://api.openweathermap.org/data/2.5/forecast";
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
        const forecast = res.data;
        this.setState({
          currentCity: `${forecast.city.name}, ${forecast.city.country}`,
          dailyForecast: forecast.list[0],
          forecast: getFormatedForecast(forecast.list),
          isLoaderShown: false,
          errorMessage: ""
        });
      })
      .catch(err => {
        let msg = "";
        if (err.response) {
          msg = `Sorry, something went wrong: ${err.response.data.message}`;
        } else {
          msg = "We are having some problems, try to reload page.";
        }

        this.showErrorMessage(msg);
      });
  }

  componentDidMount() {
    this.getForecastData("dnipro");
  }

  render() {
    return (
      <div>
        <ErrorMessage message={this.state.errorMessage} />
        <Header onSearch={this.getForecastData} />
        <Forecast
          isLoaderShown={this.state.isLoaderShown}
          dailyForecast={this.state.dailyForecast}
          currentCity={this.state.currentCity}
          forecast={this.state.forecast}
        />
      </div>
    );
  }
}

export default App;
