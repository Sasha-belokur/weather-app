function getFormatedDate(seconds) {
  const date = new Date(seconds * 1000);
  const mins = (date.getMinutes() + "").padStart(2, "0");
  const hrs = (date.getHours() + "").padStart(2, "0");
  const day = (date.getDate() + "").padStart(2, "0");
  const month = (date.getMonth() + 1 + "").padStart(2, "0");

  return `${hrs}:${mins} ${day}.${month}`;
}

export function getFormatedForecast(list) {
  const formatedForecast = list
    .filter((item, index) => {
      return index % 3 === 0;
    })
    .map(item => ({
      date: getFormatedDate(item.dt),
      wind: item.wind.speed,
      temp: item.main.temp,
      presure: item.main.pressure,
      humidity: item.main.humidity
    }));

  return formatedForecast;
}

export function getCurrentDay() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const date = new Date();
  const day = date.getDate();
  const weekDay = days[date.getDay()];
  const month = months[date.getMonth()];

  return `${weekDay}, ${day} ${month}`;
}
