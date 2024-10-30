import ServiceCard from "./ServiceCard";
import { FaReact } from "react-icons/fa";
import { TbSocial } from "react-icons/tb";
import { CiMail } from "react-icons/ci";
import { TbSeo } from "react-icons/tb";
import { MdContentCopy } from "react-icons/md";
import { RiAdvertisementLine } from "react-icons/ri";
import { motion } from "framer-motion";

function Services() {
  return (
    <>
      <motion.div
        className="flex flex-col  gap-10 bg-green-900 mx-2 lg:mx-10 lg:px-12 px-6 lg:py-20 py-10 mt-6 rounded-2xl"
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
          <h1 className="text-3xl lg:text-7xl text-white">Our Services</h1>
          <div className="flex lg:flex-row flex-col justify-between lg:items-center items-start gap-4">
            <p className="text-lg text-slate-300">
              Our digital arketing service boosts your online presence with SEO,
              social media, and targeted ads.
            </p>
            <button className="text-slate-300 border-2 py-2 px-4 rounded-xl hover:scale-105">
              Schedule Discussion {">"}
            </button>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          <ServiceCard
            title={"Web & App Development"}
            description={
              "We develop digital assets, such as website, microsite and mobile apps, for your business"
            }
          >
            <div className="text-4xl bg-amber-100 text-black p-2 rounded-lg">
              <FaReact />
            </div>
          </ServiceCard>
          <ServiceCard
            title={"Social Media Marketing"}
            description={
              "We help you to promote your brand on Facebook, Twitter, Instagram with best social strategies"
            }
          >
            <div className="text-4xl bg-amber-100 text-black p-2 rounded-lg">
              <TbSocial />
            </div>
          </ServiceCard>
          <ServiceCard
            title={"Email Marketing"}
            description={
              "We help you to build your lists and send them newsletter regularly or simply an email blast"
            }
          >
            <div className="text-4xl bg-amber-100 text-black p-2 rounded-lg">
              <CiMail />
            </div>
          </ServiceCard>
          <ServiceCard
            title={"Search Engine Marketing"}
            description={
              "We are officially partnering with Google to help your website appears on top within minutes"
            }
          >
            <div className="text-4xl bg-amber-100 text-black p-2 rounded-lg">
              <TbSeo />
            </div>
          </ServiceCard>
          <ServiceCard
            title={"Creative & Content"}
            description={
              "We think out of the box to create contents that matter to your audience & business growth"
            }
          >
            <div className="text-4xl bg-amber-100 text-black p-2 rounded-lg">
              <MdContentCopy />
            </div>
          </ServiceCard>
          <ServiceCard
            title={"Digital Advertising & PPC"}
            description={
              "We make your digital media buying and PPC easier by partnering with a lot of major publishers"
            }
          >
            <div className="text-4xl bg-amber-100 text-black p-2 rounded-lg">
              <RiAdvertisementLine />
            </div>
          </ServiceCard>
        </div>
      </motion.div>
    </>
  );
}

export default Services;
