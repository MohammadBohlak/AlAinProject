import React from "react";
import p1 from "../../../assets/images/projects/p1.jpg";
import p2 from "../../../assets/images/projects/p2.jpg";
import p3 from "../../../assets/images/projects/p3.jpg";
import p4 from "../../../assets/images/projects/p4.jpg";
import p5 from "../../../assets/images/projects/p5.jpg";
import p6 from "../../../assets/images/projects/p6.jpg";
import CardProject from "../cardProject/CardProject";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "./styles.css";
import "swiper/css/pagination";
import "swiper/css";
import styled from "styled-components";

function SwiperCards() {
  
  return (
    <>
      <Swiper
        pagination={{
            clickable: true,
          }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardProject image={p1} />
        </SwiperSlide>

        <SwiperSlide>
          <CardProject image={p2} />
        </SwiperSlide>
        <SwiperSlide>
          <CardProject image={p3} />
        </SwiperSlide>
        <SwiperSlide>
          <CardProject image={p4} />
        </SwiperSlide>

        <SwiperSlide>
          <CardProject image={p5} />
        </SwiperSlide>

        <SwiperSlide>
          <CardProject image={p6} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
const StyledSwiperCards = styled(Swiper)`
  width: 100%;
  height: 100%;

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export default SwiperCards;
