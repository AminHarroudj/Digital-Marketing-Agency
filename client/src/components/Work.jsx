import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import { motion } from "framer-motion";

function Work() {
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
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl lg:text-7xl">Our Work</h1>
          <div className="flex lg:flex-row flex-col justify-between lg:items-center items-start gap-4">
            <p className="text-lg text-gray-500">
              Our work combines creativity and data-driven strategies to deliver
              impactful digital marketing campaigns that drive growth
            </p>
            <button className="border-2 border-black py-2 px-4 rounded-xl hover:scale-105">
              Show more {">"}
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <motion.div
            className="flex flex-col gap-10"
            initial={{
              x: -50,
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
            <hr />
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="flex flex-col items-start justify-between gap-4">
                <button className="border-2 py-2 px-4 rounded-full hover:scale-105">
                  SEO Optimization
                </button>
                <div className="flex flex-col gap-4 lg:gap-10">
                  <h1 className="text-3xl">
                    TechCorp&apos;s Traffic Soars With SEO Optimization
                  </h1>
                  <p className="text-lg text-gray-500">
                    Boosted otganic traffic by 50% for TechCorp through
                    carefullt targeted keyword strategies and comprehensive
                    on-page optimization, driving significant growth in search
                    engine visibility
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <img src={img1} alt="" className="rounded-xl w-3/5" />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col gap-10"
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
            <hr />
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="">
                <img src={img2} alt="" className="rounded-xl w-3/5" />
              </div>
              <div className="flex flex-col items-start justify-between gap-4">
                <button className="border-2 py-2 px-4 rounded-full hover:scale-105">
                  SEO Optimization
                </button>
                <div className="flex flex-col gap-4 lg:gap-10">
                  <h1 className="text-3xl">
                    TechCorp&apos;s Traffic Soars With SEO Optimization
                  </h1>
                  <p className="text-lg text-gray-500">
                    Boosted otganic traffic by 50% for TechCorp through
                    carefullt targeted keyword strategies and comprehensive
                    on-page optimization, driving significant growth in search
                    engine visibility
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col gap-10"
            initial={{
              x: -50,
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
            <hr />
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="flex flex-col items-start justify-between gap-4">
                <button className="border-2 py-2 px-4 rounded-full hover:scale-105">
                  SEO Optimization
                </button>
                <div className="flex flex-col gap-4 lg:gap-10">
                  <h1 className="text-3xl">
                    TechCorp&apos;s Traffic Soars With SEO Optimization
                  </h1>
                  <p className="text-lg text-gray-500">
                    Boosted otganic traffic by 50% for TechCorp through
                    carefullt targeted keyword strategies and comprehensive
                    on-page optimization, driving significant growth in search
                    engine visibility
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <img src={img3} alt="" className="rounded-xl w-3/5" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default Work;
