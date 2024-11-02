import { CiMail } from "react-icons/ci";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { SiCoinmarketcap } from "react-icons/si";
import { motion } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <motion.div
        className="flex justify-between px-4 lg:px-10 py-6 lg:p items-center text-lg z-50"
        initial={{
          y: -50,
        }}
        whileInView={{
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
      >
        <div className="flex items-center gap-20">
          <div className="font-semibold flex justify-center items-center gap-2">
            <SiCoinmarketcap className="text-4xl" />
            <p>WOOKIES</p>
          </div>
          <ul
            className={`lg:flex max-lg:flex-col gap-6 text-center max-lg:absolute max-lg:top-20 max-lg:right-0 max-lg:left-0 max-lg:py-4 ${
              open ? "flex" : "hidden"
            } max-lg:bg-white max-lg:bg-opacity-90 z-50`}
          >
            <li>
              <a href="#" className="hover:text-green-900">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-900">
                Our Work
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-900">
                Project
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-900">
                Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-900">
                About Us
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-2">
          <button className="lg:flex hidden items-center justify-center gap-2 border-2 px-8 py-2 rounded-xl border-gray-600 bg-white">
            Lets Talk <CiMail />
          </button>
          <IoMdMenu
            className="text-4xl cursor-pointer lg:hidden flex"
            onClick={() => {
              setOpen(!open);
            }}
          />
        </div>
      </motion.div>
    </>
  );
}

export default Navbar;
