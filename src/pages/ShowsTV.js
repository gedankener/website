import React from "react";
import PageTemplate from "../components/PageTemplate";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow } from "swiper/modules";

const ShowsTV = ({ isChaos }) => {
  const content = (
    <>
      <h2>My Favorite Shows & TV Series</h2>
      {/* <p>Here's a list of some TV shows and series that I enjoy watching:</p>
      <ul>
        <li>
          <h3>Show Title 1</h3>
          <p>Brief description of the show and why I like it.</p>
        </li>
        <li>
          <h3>Show Title 2</h3>
          <p>Brief description of the show and why I like it.</p>
        </li>
        <li>
          <h3>Show Title 3</h3>
          <p>Brief description of the show and why I like it.</p>
        </li>
        <li>
          <h3>Show Title 4</h3>
          <p>Brief description of the show and why I like it.</p>
        </li>
      </ul>
      <h3>Currently Watching</h3>
      <p>
        I'm currently binge-watching [Show Name]. It's about [brief
        description].
      </p>
      <h3>All-Time Favorite</h3>
      <p>
        My all-time favorite show is [Show Name]. I've watched it [number]
        times!
      </p>
      <p>
        What about you? Do we share any favorite shows? Let me know in the
        'Leave a Note' section!
      </p> */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 30,
          depth: 50,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt="nature-1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            alt="nature-2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            alt="nature-3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            alt="nature-4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-5.jpg"
            alt="nature-5"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-6.jpg"
            alt="nature-6"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-7.jpg"
            alt="nature-7"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-8.jpg"
            alt="nature-8"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );

  return (
    <PageTemplate title="Shows & TV" content={content} isChaos={isChaos} />
  );
};

export default ShowsTV;
