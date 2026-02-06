import './App.css';

import Footer from './components/Footer';
import Slider from './components/Slider';
import Pets from "./components/Pets";
import WheaterChart from './components/WeatherChart.jsx';

function App() {
  return (
    <>
      <WheaterChart></WheaterChart>
      <Pets></Pets>
      <Slider></Slider>
      <Footer></Footer>
    </>
  );
}

export default App;
