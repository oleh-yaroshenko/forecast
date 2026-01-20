import Sliderone from '../images/Sliderone.jpg';
import Slider2 from '../images/Slider2.jpg';
import Slider3 from '../images/Slider3.jpg';
import Slider4 from '../images/Slider4.jpg';
import Slider5 from '../images/Slider5x.jpg';
import { useEffect, useState } from 'react';
import '../components/Slider.css'
const images = [
  { id: 1, src: Sliderone, alt: 'Waterfall' },
  { id: 2, src: Slider2, alt: ' river' },
  { id: 3, src: Slider3, alt: 'Valley ' },
  { id: 4, src: Slider4, alt: ' mountains' },
  { id: 5, src: Slider5, alt: 'lake' },
];
 function Slider() {
const [currentIndex, setCurrentIndex] = useState(2);
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, 4000);

  return () => clearInterval(interval);
}, []);

    return(
        <section className='Nature'>
            <div className='container'>
 <h3 className='Nature__title'>Beautiful nature</h3>
      <div className='Nature-slider'>
        {images.map((img, i) => (
          <div
            key={img.id}
            className={`slide ${i === currentIndex ? 'slide--active' : ''}`}
            onClick={() => setCurrentIndex(i)}
          >
            <img src={img.src} alt={img.alt} className="slide-media" />
          </div>
        ))}

      </div>
            </div>
           

        </section>
    )
 }
 export default Slider