import React from "react";
import { motion } from "framer-motion";
import { FaWrench, FaToolbox, FaMotorcycle, FaBicycle } from "react-icons/fa";

const WhoWeAre = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },
    four: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <div id="who-we-are">
      <h2>Who We Are</h2>
      <section>
        <motion.div
          className="service-box1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <h3>15+</h3>
          <p>Years of Experience</p>
        </motion.div>
        <motion.div
          className="service-box2"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
        >
          <FaWrench />
          <span>Expert Bike Mechanics</span>
        </motion.div>
        <motion.div
          className="service-box3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.2,
          }}
        >
          <FaToolbox />
          <span>State-of-the-Art Shop</span>
        </motion.div>
        <motion.div
          className="service-box4"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
          <FaBicycle />
          <span>Custom Bike Builds</span>
        </motion.div>
      </section>
    </div>
  );
};

export default WhoWeAre;