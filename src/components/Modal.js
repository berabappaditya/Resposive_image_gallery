import React from "react";
import "./Modal.css";
import { motion } from 'framer-motion';

const Modal = ({ setSelectedImage, selectImage }) => {
  console.log(`This is image data from modal: ${selectImage}`);
  console.log(typeof selectImage);
  console.log(typeof setSelectedImage);

  const clickHandler = (e) => {
    if (e.target.classList.contains("backDropclass")) {
      setSelectedImage(null);
    }
  };

  return (
    <motion.div id="backDrop" className="backDropclass" onClick={clickHandler}
    initial={{opacity:0}}
    animate={{opacity:1}}
    >
      <motion.img className="full-img" src={selectImage} alt="gallery"
      
      />
      
    </motion.div>
  );
};

export default Modal;
