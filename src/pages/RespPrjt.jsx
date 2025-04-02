import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import VideoBackground from "../components/VideoBackground";
import NavBar from "../components/NavBar";
import CardsRespo from "../components/CardsRespo";

const RespPrjt = () => {
  const cards = [
    {
      href: "/websites",
      image: "https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Websites",
      content: "I design and develop responsive, high-performing websites that cater to both aesthetics and functionality.",
    },
    {
      href: "/ui-ux",
      image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "UI / UX",
      content: "I create intuitive user interfaces and seamless experiences, ensuring users easily navigate and enjoy digital products.",
    },
    {
      href: "/graphic-design",
      image: "https://images.pexels.com/photos/7818238/pexels-photo-7818238.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Graphic Design",
      content: "I craft visually appealing designs, blending creativity with strategic messaging to communicate ideas effectively.",
    },
  ];

  return (
    <div>
      <VideoBackground />
      <div className="content">
          <NavBar /> 
          <div className="projects-stack">
        <span className="project u"> My PROJECTS</span>
        <span className="project em">My PROJECTS</span>
        <span className="project em">My PROJECTS</span>
        <span className="project em">My PROJECTS</span>
      </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          style={{ width: "80%", margin: "auto" }}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <a href={card.href} style={{ textDecoration: "none", color: "black" }}>
                <CardsRespo image={card.image} title={card.title} content={card.content} />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RespPrjt;
