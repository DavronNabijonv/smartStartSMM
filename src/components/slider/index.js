import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import './styles.scss'
import a1 from "../../assets/images/a1.png";
import a2 from "../../assets/images/a2.png";
import a3 from "../../assets/images/a3.png";
import a4 from "../../assets/images/a4.png";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        
        }}
        slidesPerView={4}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='grp'>
            <img src={a4} />
            <div className="backdrop"></div>
            <p className="ttl">Manager</p>
            <p className="txt">Bahrom Yo`ldashev</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='grp'>
            <img src={a3} />
            <div className="backdrop"></div>
            <p className="ttl">Manager</p>
            <p className="txt">O`tkirbek Karabaev</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grp">
            <img src={a2} />
            <div className="backdrop"></div>
            <p className="ttl">Logo Dizayner</p>
            <p className="txt">Abdurahmonov Muhammad Yusuf</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grp">
            <img src={a1} />
            <div className="backdrop"></div>
            <p className="ttl">Grafik Dizayner</p>
            <p className="txt">Muhammadmuydinov Halilulloh</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grp">
            <img src={a2} />
            <div className="backdrop"></div>
            <p className="ttl">Logo Dizayner</p>
            <p className="txt">Abdurahmonov Muhammad Yusuf</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grp">
            <img src={a1} />
            <div className="backdrop"></div>
            <p className="ttl">Grafik Dizayner</p>
            <p className="txt">Muhammadmuydinov Halilulloh</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
