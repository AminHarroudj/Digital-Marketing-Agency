import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
function ServiceCard({ children, title, description }) {
  return (
    <>
      <motion.div
        className="text-slate-300 text-md flex flex-col gap-4 bg-green-800 rounded-xl p-6 items-start"
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
        <div>{children}</div>
        <h1 className="text-white text-2xl">{title}</h1>
        <p>{description}</p>
        <p>Whats is included in service?</p>
        <button className="text-slate-300 border-2 py-2 px-4 rounded-xl hover:scale-105">
          Schedule Discussion {">"}
        </button>
      </motion.div>
    </>
  );
}

export default ServiceCard;
