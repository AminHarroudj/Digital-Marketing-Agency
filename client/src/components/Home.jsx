import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import { GoArrowDownRight } from "react-icons/go";
import img1 from "../assets/teamwork.jpg";

function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center px-6 py-10  text-lg gap-10 text-center">
        <motion.h1
          className="text-3xl lg:text-6xl"
          initial={{
            y: -50,
          }}
          animate={{
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          - WOOKIES -
        </motion.h1>
        <motion.h1
          className="text-5xl lg:text-7xl"
          initial={{
            y: -50,
          }}
          animate={{
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          DIGITAL MARKETING AGENCY
        </motion.h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 3,
          }}
        >
          Digital agency crafting impactful, user-centric experiences with
          cutting-edge design and technology for maximum success. Innovative
          digital agency crafting impactful
        </motion.p>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
          <motion.button
            className="flex justify-center items-center gap-2 border-2 px-6 py-2 rounded-xl border-gray-600 text-white bg-green-900 hover:bg-transparent hover:text-black"
            initial={{
              x: -100,
            }}
            whileInView={{
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
          >
            Get In Touch <GoArrowUpRight />
          </motion.button>
          <motion.button
            className="flex justify-center items-center gap-2 border-2 px-6 py-2 rounded-xl border-gray-600 hover:bg-green-900 hover:text-white"
            initial={{
              x: 150,
            }}
            whileInView={{
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
          >
            Learn More <GoArrowDownRight />
          </motion.button>
        </div>
        <motion.div
          className="mx-2 lg:mx-4"
          initial={{
            y: 50,
          }}
          animate={{
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          <img src={img1} alt="" className="rounded-2xl" />
        </motion.div>
      </div>
    </>
  );
}

export default Home;
