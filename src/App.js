import './App.css';
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
  return (
    <>
      <Header></Header>
      <DBoard></DBoard>
      <ModalForm></ModalForm>
      <WeatherDashboard></WeatherDashboard>
      <WheaterChart></WheaterChart>
      <WeatherList></WeatherList>
      <Pets></Pets>
      <Slider></Slider>
      <Footer></Footer>
    </>
  );
}

export default App;