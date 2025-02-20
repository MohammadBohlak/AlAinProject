import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import CardServices from "../services/CardServices";
import {
  StyledSwiperServices,
  StyledSwiperSlide,
} from "./swiperSevices.styles";

const services = [
  "التصميم المعماري والاستشارات الهندسية",
  "إدارة المشروعات والبناء",
  "الترميم والتجديد",
  "التركيب والصيانة الكهربائية",
  "أنظمة التكييف والتبريد",
];

export default function SwiperServices() {
  return (
    <>
      <StyledSwiperServices
        navigation={true}
        modules={[Navigation]}
        slidesPerView={2}
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          575: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
      >
        {services.map((e, index) => (
          <StyledSwiperSlide key= {index}>
            <CardServices text= {e} />
          </StyledSwiperSlide>
        ))}
      </StyledSwiperServices>
    </>
  );
}
