import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import Slider1 from '../assets/slider1.jpg';
import Slider2 from '../assets/slider2.jpg';
import Slider3 from '../assets/slider3.jpg';
import Slider4 from '../assets/slider4.jpg';
import Slider5 from '../assets/slider5.jpg';
import '../components/Slider.css';
const images = [
  { id: 1, src: Slider1 },
  { id: 2, src: Slider2 },
  { id: 3, src: Slider3 },
  { id: 4, src: Slider4 },
  { id: 5, src: Slider5 },
];

function Slider() {
  return (
    <section className="Nature">
      <div className="container">
        <h3 className="Nature__title">Beautiful nature</h3>

        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView="auto"
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          className="Nature-slider"
        >
          {images.map((img) => (
            <SwiperSlide key={img.id} className="slide-item">
              <img src={img.src} alt="nature" className="slide-image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
export default Slider