"use client";
import React from "react";
import { Billboard as BillboardType } from "@/types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Billboard from "./billboard";

interface BillboardCarouselProps {
  data: BillboardType[];
}

const BillboardCarousel: React.FC<BillboardCarouselProps> = ({ data }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={2000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {data.map((billboard) => (
        <Billboard key={billboard.id} data={billboard} />
      ))}
    </Carousel>
  );
};

export default BillboardCarousel;
