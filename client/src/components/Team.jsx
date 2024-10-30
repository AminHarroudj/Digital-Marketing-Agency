import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Mebmber from "./Mebmber";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.png";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.png";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.png";
import img9 from "../assets/9.png";
import img10 from "../assets/10.png";
import { motion } from "framer-motion";

function Team() {
  return (
    <>
      <motion.div
        className="flex flex-col gap-10 mx-2 lg:mx-10 lg:px-12 px-6 lg:py-20 py-10 mt-6 rounded-2xl"
        initial={{
          y: 50,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl lg:text-7xl">Meet Our Team</h1>
          <div className="flex lg:flex-row flex-col justify-between lg:items-center items-start gap-4">
            <p className="text-lg text-gray-500">
              Meet our team of passionate digital marketing experts, dedicated
              to crafting innovative solutions that fuel success.
            </p>
            <button className="border-2 border-black py-2 px-4 rounded-xl hover:scale-105">
              Show more {">"}
            </button>
          </div>
        </div>
        <motion.div
          initial={{
            x: 50,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
        >
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            breakpoints={{
              1024: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              // When window width is <= 768px
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },

              480: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
            }}
          >
            <SwiperSlide>
              <Mebmber name="Ethan" job="Frontend Developer">
                <img src={img1} alt="" className="rounded-xl" />
              </Mebmber>
            </SwiperSlide>
            <SwiperSlide>
              <Mebmber name="Ava" job="Expert Marketing">
                <img src={img2} alt="" className="rounded-xl" />
              </Mebmber>
            </SwiperSlide>
            <SwiperSlide>
              <Mebmber name="Liam" job="Backend Developer">
                <img src={img3} alt="" className="rounded-xl" />
              </Mebmber>
            </SwiperSlide>
            <SwiperSlide>
              <Mebmber name="Sophia" job="SEO Engineer">
                <img src={img4} alt="" className="rounded-xl" />
              </Mebmber>
            </SwiperSlide>
            <SwiperSlide>
              <Mebmber name="Noah" job="Database Engineer">
                <img src={img5} alt="" className="rounded-xl" />
              </Mebmber>
            </SwiperSlide>
            <SwiperSlide>
              <Mebmber name="Olivia" job="UI/UX Designer">
                <img src={img6} alt="" className="rounded-xl" />
              </Mebmber>
            </SwiperSlide>
            <SwiperSlide>
              <Mebmber name="James" job="Designer">
                <img src={img7} alt="" className="rounded-xl" />
              </Mebmber>
            </SwiperSlide>
            <SwiperSlide>
              <Mebmber name="Isabella" job="ADS Expert">
                <img src={img8} alt="" className="rounded-xl" />
              </Mebmber>
            </SwiperSlide>
            <SwiperSlide>
              <Mebmber name="William" job="Content Creator">
                <img src={img9} alt="" className="rounded-xl" />
              </Mebmber>
            </SwiperSlide>
            <SwiperSlide>
              <Mebmber name="Mia" job="Photographer">
                <img src={img10} alt="" className="rounded-xl" />
              </Mebmber>
            </SwiperSlide>
            <SwiperSlide>
              <Mebmber name="Benjamin" job="Marketing Leader">
                <img src={img1} alt="" className="rounded-xl" />
              </Mebmber>
            </SwiperSlide>
            <SwiperSlide>
              <Mebmber name="Charlotte" job="Social Media Leader">
                <img src={img2} alt="" className="rounded-xl" />
              </Mebmber>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Team;
