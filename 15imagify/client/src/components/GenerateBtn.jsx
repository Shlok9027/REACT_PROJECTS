import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContect";
import { useNavigate } from "react-router-dom";
const GenerateBtn = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  };
  return (
    <motion.div
      className="pb-16 text-center"
      initial={{ opacity: 0.5, y: 400 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h1 className="text-2xl ms:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16">
        See the magic. Try now
      </h1>
      <button
        onClick={onClickHandler}
        className="inline-flex items-center gap-2 px-10 py-3 rounded-full bg-black text-white m-auto hover:scale-110 transition-all duration-600"
      >
        Generate Images
        <img src={assets.star_group} alt="" className="h-6"></img>
      </button>
    </motion.div>
  );
};

export default GenerateBtn;