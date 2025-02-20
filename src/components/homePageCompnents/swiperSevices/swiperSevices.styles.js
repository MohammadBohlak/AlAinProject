import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const StyledSwiperServices = styled(Swiper)`
  height: 500px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 0px 10px var(--secondary-color) inset;
  .swiper-button-next:after {
    position: absolute;
    left: -10px;
  }
  .swiper-button-next {
    top: 80%;
    left: 50px !important ;
  }
  .swiper-button-next,
  .swiper-button-prev {
    position: absolute;
    color: var(--secondary-color);
  }
  .swiper-button-prev {
    top: 80%;
    left: auto !important ;
    right: 50px;
  }
`;
export const StyledSwiperSlide = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;
  background: transparent;
  display: flex;
  align-items: center;

`
