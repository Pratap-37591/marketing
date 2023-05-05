import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";


// import required modules
import { FreeMode, Pagination ,Autoplay} from "swiper";

const Carosuel = () => {
  let reactSwipeE1;

  const [cards, setCardas] = useState([
    {
      image: require("../images/profile1.png"),
      name: "Maha dev",
      description:
        "As a digital marketing agency. we strive to understand our client's bussiness goals first then all decisions made with those",
      icons: {
        star: <AiFillStar />,
        starHalf: <BsStarHalf />,
        rating: "Rating: 4.3",
      },
      role: "FullStack developer",
    },
    {
      image: require("../images/profile1.png"),
      name: "punith",
      description:
        "As a digital marketing agency. we strive to understand our client's bussiness goals first then all decisions made with those",
      icons: {
        star: <AiFillStar />,
        starHalf: <BsStarHalf />,
        rating: "Rating: 4.3",
      },
      role: "ui/ux designer",
    },
    {
      image: require("../images/profile1.png"),
      name: "jai shankar",
      description:
        "As a digital marketing agency. we strive to understand our client's bussiness goals first then all decisions made with those",
      icons: {
        star: <AiFillStar />,
        starHalf: <BsStarHalf />,
        rating: "Rating: 4.3",
      },
      role: "designer",
    },
    {
      image: require("../images/profile1.png"),
      name: "Naredra Modi",
      description:
        "As a digital marketing agency. we strive to understand our client's bussiness goals first then all decisions made with those",
      icons: {
        star: <AiFillStar />,
        starHalf: <BsStarHalf />,
        rating: "Rating: 4.3",
      },
      role: "developer",
    },
    {
      image: require("../images/profile1.png"),
      name: "Rishi shetty",
      description:
        "As a digital marketing agency. we strive to understand our client's bussiness goals first then all decisions made with those",
      icons: {
        star: <AiFillStar />,
        starHalf: <BsStarHalf />,
        rating: "Rating: 4.3",
      },
      role: "graph",
    },
  ]);
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        autoplay={
         { delay: 4000}
        }
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination ,Autoplay]}
        className="mySwiper"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="swiper pratap">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="swiper-client-msg">
                    <p>{card.description}</p>
                  </div>
                  <div className="box">
                    <div className="star-icons same">
                      <span>{card.icons.star}</span>
                      <span>{card.icons.star}</span>
                      <span>{card.icons.star}</span>
                      <span>{card.icons.star}</span>
                      <span>{card.icons.starHalf}</span>
                    </div>
                    <div className="rating same">{card.icons.rating}</div>
                  </div>
                  <div className="swiper-client-data grid grid-two-column">
                    <figure>
                      <img src={card.image} alt="client review" />
                    </figure>
                    <div className="client-data-details">
                      <p>{card.name}</p>
                      <p>{card.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carosuel;
