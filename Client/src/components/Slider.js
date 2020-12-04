import React, { useState } from "react";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Thumbs,
} from "swiper";
import { Grid, Image, Segment } from "semantic-ui-react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Thumbs]);

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const slides = [];
  for (let i = 0; i < 5; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`}>
        <img
          src={`https://picsum.photos/id/${i + 1}/500/300`}
          alt={`Slide ${i}`}
        />
      </SwiperSlide>
    );
  }
  const thumbs = [];
  for (let i = 0; i < 5; i++) {
    thumbs.push(
      <SwiperSlide key={`slide-${i}`}>
        <img
          src={`https://picsum.photos/id/${i + 1}/163/100`}
          alt={`Slide ${i}`}
        />
      </SwiperSlide>
    );
  }
  return (
    <React.Fragment>
      <Grid.Column width={3}>
        <Swiper
          id="thumbs"
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={3}
          direction={"vertical"}
          style={{ height: "300px" }}
        >
          {thumbs}
        </Swiper>
      </Grid.Column>

      <Grid.Column width={9}>
        <Swiper
          id="main"
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          thumbs={{ swiper: thumbsSwiper }}
          style={{ backgroundPosition: "center", backgroundSize: "cover" }}
        >
          {slides}
        </Swiper>
      </Grid.Column>
    </React.Fragment>
  );
};
