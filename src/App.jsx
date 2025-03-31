import { useState, useRef } from "react";
import "./App.css";
import axios from "axios";
import Search from "./components/Search/Search";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo"; 

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  let valueInput = useRef();

  async function getWeather() {
    try {
      setLoading(true); 
      setErrorMessage(''); 
      setWeatherData('');

      let nameCity = valueInput.current.value;
      const key = "e9b078b46ec032547af9ca91af4b6012";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=${key}&lang=pt_br`;

      let request = await axios.get(url);
      setWeatherData(request.data);
    } catch (error) {
      setErrorMessage(error.message); 
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <h1>Previsão do Tempo</h1>

      <Search valueInput={valueInput} getWeather={getWeather} />

      {loading && <p className="loading">Carregando...</p>}

      {weatherData.main && (
        <WeatherInfo weatherData={weatherData} />
      )}

      {errorMessage && <p style={{ color: "red", textAlign: "center" }}>A Cidade não foi encontrada!</p>}
    </>
  );
}

export default App;
