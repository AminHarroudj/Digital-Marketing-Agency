import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import { motion } from "framer-motion";

function About() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Your Chart Title",
      },
    },
  };
  const barData = {
    labels: [
      "Client Retention",
      "Budget Growth",
      "ROI",
      "Service Demand",
      "Agency Growth",
    ],
    datasets: [
      {
        label: "Statics",
        data: [90, 56, 82, 79, 65],
        backgroundColor: "#fefae0",
        borderColor: "#606c38",
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <motion.div
        className="bg-white lg:mx-10 lg:px-12 px-6 lg:py-20 py-10 mt-6 rounded-2xl"
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
        <div className="grid lg:grid-cols-2 max-lg:text-center gap-4">
          <h1 className="text-3xl lg:text-7xl">About us</h1>
          <div className="text-lg flex flex-col gap-6">
            <p>
              At WOOKIES, we specialize in innovative digital marketing
              strategies that drive results. Our team is dedicated to helping
              businesses grow and succeed online.
            </p>
            <p className="text-gray-500">
              With tailored solutions and a focus on measurable outcomes, we
              empower brands to connect with their audience and achieve their
              goals in the digital landscape
            </p>
          </div>
        </div>
        <div className="mt-16">
          <Bar options={options} data={barData}></Bar>
        </div>
      </motion.div>
    </>
  );
}

export default About;
