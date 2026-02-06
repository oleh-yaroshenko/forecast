import './App.css';
import ModalForm from './components/ModalForm';
import Footer from './components/Footer';
import Slider from './components/Slider';
import Pets from "./components/Pets";
import WheaterChart from './components/WeatherChart.jsx';

function App() {
  return (
    <>
      <ModalForm></ModalForm>
      <WheaterChart></WheaterChart>
      <Pets></Pets>
      <Slider></Slider>
      <Footer></Footer>
    </>
  );
}

export default App;
