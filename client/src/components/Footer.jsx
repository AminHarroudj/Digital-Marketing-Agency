import { CiMail } from "react-icons/ci";
import { SiCoinmarketcap } from "react-icons/si";
import { FaRegCopyright } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <>
      <motion.div
        className="flex flex-col  gap-16 bg-green-900 mx-2 lg:mx-10 lg:px-12 px-6 py-6 mt-6 rounded-2xl"
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
        <div className="bg-white flex flex-col items-center justify-center gap-10 py-10 px-2 rounded-xl">
          <h1 className="text-3xl lg:text-5xl text-center">
            Ready To Launch Your Digital <br /> Marketing Project ?
          </h1>
          <p className="text-lg text-gray-500 text-center">
            Ready to launch your digital marketing project ? Let us craft
            strategies that drive results and growth.
          </p>
          <button className="flex items-center justify-center gap-2 border-2 px-8 py-2 rounded-xl border-gray-600 bg-green-900 text-white hover:border-green-900 hover:text-green-900 hover:bg-white">
            Lets Talk <CiMail />
          </button>
        </div>
        <div className="text-white grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <div className="font-semibold flex items-center gap-2 text-3xl">
              <SiCoinmarketcap className="text-6xl" />
              <p>WOOKIES</p>
            </div>
            <p className="text-lg text-slate-300">
              Specializes in innovative digital marketing strategies, blending
              creativity and data-driven insights to elevate your brand&apos;s
              online presence and drive measurable growth.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-medium">MENU</h1>
              <ul className="text-lg text-slate-300 flex flex-col gap-2">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">Service</li>
                <li className="cursor-pointer">Our Work</li>
                <li className="cursor-pointer">Project</li>
                <li className="cursor-pointer">About Us</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-medium">SERVICES</h1>
              <ul className="text-lg text-slate-300 flex flex-col gap-2">
                <li className="cursor-pointer">Web & App Dev</li>
                <li className="cursor-pointer">Social Media Marketing</li>
                <li className="cursor-pointer">Email Marketing</li>
                <li className="cursor-pointer">SEO</li>
                <li className="cursor-pointer">Creative & Content</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-medium">SOCIAL MEDIA</h1>
              <ul className="text-lg text-slate-300 flex flex-col gap-2">
                <li className="cursor-pointer">Instagram</li>
                <li className="cursor-pointer">Twitter</li>
                <li className="cursor-pointer">Linkedin</li>
                <li className="cursor-pointer">Facebook</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <hr />
          <div className="text-white flex items-center justify-center gap-2 text-center">
            <FaRegCopyright />
            <p>Mohammed El Amin Harroudj</p>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Footer;
