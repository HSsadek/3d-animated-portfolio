import { TypeAnimation } from 'react-type-animation';
import { motion } from 'motion/react';
const Speech = () => {
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 3 }}
      className="bubbleContainer"
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            'Heyyy how is going bro ',
            1000,
            'Do you know anything about React.js ? here is the information :) ',
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
        />
      </div>
      <img src="/man.png" alt="" />
    </motion.div>
  );
};
export default Speech;
