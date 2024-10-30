import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ClientCard from "./ClientCard";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.png";
import { motion } from "framer-motion";

function ClientSay() {
  return (
    <>
      <motion.div
        className="flex flex-col bg-white gap-10 mx-2 lg:mx-10 lg:px-12 px-6 lg:py-20 py-10 mt-6 rounded-2xl border-2"
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
        <h1 className="text-3xl lg:text-7xl text-center">What Client Says</h1>
        <p className="text-lg text-gray-500 text-center">
          Our clients&apos; feedback speaks volumes. Discover their stories of
          success, collaboration, and the impactful results we&apos;ve delivered
          toghether.
        </p>
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
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // When window width is <= 768px
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },

              480: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            }}
          >
            <SwiperSlide>
              <ClientCard
                name="Robert Fox"
                job="Ceo Of UrbanNest's"
                say="The digital marketing team trransformed our online presence, delivering exceptional results with their SEO and targeted ads. Highly recommend their professional approach"
              >
                <img src={img1} alt="" className="rounded-lg" />
              </ClientCard>
            </SwiperSlide>
            <SwiperSlide>
              <ClientCard
                name="Jennifer Ter"
                job="Ceo Of UrbanNest's"
                say="We've seen incredible growth thanks to their tailores digital marketing strategies. The team's expertise in SEO ans social media has been invaluable, Thank's for all"
              >
                <img src={img2} alt="" className="rounded-lg" />
              </ClientCard>
            </SwiperSlide>
            <SwiperSlide>
              <ClientCard
                name="Lionel Messi"
                job="Ceo Of UrbanNest's"
                say="The digital marketing team trransformed our online presence, delivering exceptional results with their SEO and targeted ads. Highly recommend their professional approach"
              >
                <img src={img3} alt="" className="rounded-lg" />
              </ClientCard>
            </SwiperSlide>
            <SwiperSlide>
              <ClientCard
                name="Angelina Ber"
                job="Ceo Of UrbanNest's"
                say="We've seen incredible growth thanks to their tailores digital marketing strategies. The team's expertise in SEO ans social media has been invaluable, Thank's for all"
              >
                <img src={img4} alt="" className="rounded-lg" />
              </ClientCard>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </motion.div>
    </>
  );
}

export default ClientSay;
