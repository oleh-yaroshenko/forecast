import { useState } from 'react';
import './App.css';
import WeatherFavorites from './components/WeatherApp';
import WeatherList from './components/WeatherList';
import DBoard from './components/DBoard';
import Header from './components/Header';
import WeatherDashboard from "./components/WeatherDashboard";
import ModalForm from './components/ModalForm';
import Footer from './components/Footer';
import Slider from './components/Slider';
import Pets from "./components/Pets";
import WheaterChart from './components/WeatherChart.jsx';

function App() {
  const [city, setCity] = useState("Kyiv");
  const [cityInput, setCityInput] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [activeForm, setActiveForm] = useState(null);
  const [accountName, setAccountName] = useState("");

  const handleSearch = (value) => {
    const nextCity = value.trim();
    if (!nextCity) return;
    setCity(nextCity);
    setShowDetails(false);
  };

  const handleSeeMore = () => setShowDetails(true);

  const openSignup = () => setActiveForm("signup");
  const openLogin = () => setActiveForm("login");
  const closeForm = () => setActiveForm(null);

  const handleAuth = (name) => {
    if (name) setAccountName(name);
  };

  return (
    <div className='body'>
      <Header
        accountName={accountName}
        onOpenSignup={openSignup}
        onOpenLogin={openLogin}
      ></Header>
      <DBoard
        cityInput={cityInput}
        onCityInput={setCityInput}
        onSearch={handleSearch}
      ></DBoard>
      <ModalForm
        activeForm={activeForm}
        onClose={closeForm}
        onOpenSignup={openSignup}
        onOpenLogin={openLogin}
        onAuth={handleAuth}
      ></ModalForm>
      <WeatherFavorites city={city} onSeeMore={handleSeeMore}></WeatherFavorites>
      {showDetails && (
        <>
          <WeatherDashboard city={city}></WeatherDashboard>
          <WheaterChart city={city}></WheaterChart>
          <WeatherList city={city}></WeatherList>
        </>
      )}
      <Pets></Pets>
      <Slider></Slider>
      <Footer></Footer>
    </div>
  );
}

export default App;
