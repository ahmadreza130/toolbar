import React, { useState } from "react";
import Icons from "../components/Icons";
import { data } from "../components/Data";
import { FaHandPointer } from "react-icons/fa";
import { motion } from "framer-motion";
export default function Home() {
  const [mode, setMode] = useState({});
  return (
    <div id="toolbar">
      <div>
        <motion.button
          onClick={(e) => setMode({ name: "hand mode" })}
          whileHover={{ scale: 1.2 }}
          whileTap={{scale:1}}
          style={{background:mode.name==="hand mode"?"#080d18":"none",borderRadius:20,marginLeft:"5px"}}
        >
          <FaHandPointer className="icon" />
        </motion.button>
        <p className=" ms-2 text-white">....................</p>
        {data.map((d) => (
          <Icons key={d.name} setMode={setMode} mode={mode} data={d} />
        ))}
      </div>
      <h1>{mode.name}</h1>
    </div>
  );
}
