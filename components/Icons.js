import React, { useState } from "react";
import { motion } from "framer-motion";
import HotKeys from "react-hot-keys";

const Icons = ({ data, setMode, mode }) => {
  const { name, Icon, shortkey } = data;
  const changeMode = () => {
    setMode(data);
  };

  return (
    <div>
      <HotKeys keyName={data.shortkey} onKeyDown={changeMode} />
      <motion.button
        style={{
          background: mode.name === name ? "#080d18" : "none",
          borderRadius: 20,
        }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1 }}
        onClick={changeMode}
      >
        {Icon}
      </motion.button>
    </div>
  );
};

export default Icons;
