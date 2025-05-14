import './hero.css';
import { motion } from 'motion/react';
import Speech from './Speech';
import Shape from './Shape';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

const awardVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};
const Hero = () => {
  return (
    <div className="hero">
      <div className="hSection left">
        {/* title */}
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hTitle"
        >
          Hey There, <br />
          <span>I am Hussein!</span>
        </motion.h1>
        {/* awards */}
        <motion.div
          variants={awardVariants}
          initial="initial"
          animate="animate"
          className="aWards"
        >
          <motion.h2 variants={awardVariants}>Top Reated Desaginer</motion.h2>
          <motion.p variants={awardVariants}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </motion.p>
          <motion.div variants={awardVariants} className="aWardList">
            <motion.img
              variants={awardVariants}
              src="../../../public/award1.png"
              alt=""
            />
            <motion.img
              variants={awardVariants}
              src="../../../public/award2.png"
              alt=""
            />
            <motion.img
              variants={awardVariants}
              src="../../../public/award3.png"
              alt=""
            />
          </motion.div>
        </motion.div>
        {/* scroll SVG */}
        <a href=""></a>
      </div>

      <div className="hSection right">
        {/* Follow */}
        <motion.div
          variants={followVariants}
          initial="initial"
          animate="animate"
          className="follow"
        >
          <motion.a
            variants={followVariants}
            initial="initial"
            animate="animate"
            href=""
          >
            <img src="/instagram.png" alt="" />
          </motion.a>
          <motion.a
            variants={followVariants}
            initial="initial"
            animate="animate"
            href=""
          >
            <img src="/facebook.png" alt="" />
          </motion.a>
          <motion.a
            variants={followVariants}
            initial="initial"
            animate="animate"
            href=""
          >
            <img src="/youtube.png" alt="" />
          </motion.a>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{
              y: -10,
              x: 20,
              opacity: 1,
              transition: { duration: 1, staggerChildren: 0.2 },
            }}
            className="followTextContainer"
          >
            <motion.div
              variants={followVariants}
              initial="initial"
              animate="animate"
              className="followText"
            >
              FOLLOW ME
            </motion.div>
          </motion.div>
        </motion.div>
        {/* BOBBLE */}
        <Speech />
        {/* CERTIFICATE */}
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 3 }}
          className="certificate"
        >
          <img src="/certificate.png" alt="" />
          LAMA CERTIFICATE <br />
          PROFESSIONAL <br />
          UI DESGİNER <br />
        </motion.div>
        {/* CONTACT BUTTON  */}
        <motion.a
          animate={{ x: [200, 0], opacity: [0, 1] }}
          transition={{ duration: 2 }}
          href="/#contact"
          className="contactLink"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="contactButton"
          >
            <svg
              height="100"
              width="100"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle r="90" cx="100" cy="100" fill="pink" opacity="0.5" />

              <defs>
                <path
                  id="innerCirclePath"
                  fill="none"
                  d="M 100,100 m -60,0 a 60,60 0 1,1 120,0  a 60,60 0 1,1 -120,0"
                />
              </defs>

              <text className="circleText" fill="black">
                <textPath href="#innerCirclePath">Contact Me .</textPath>
                <textPath href="#innerCirclePath" startOffset="44%">
                  Hire Now .
                </textPath>
              </text>
            </svg>
          </motion.div>
        </motion.a>
      </div>
      <div className="bg">
        {/* 3d */}
        <Canvas>
          <Suspense fallback="loading...">
            <Shape />
          </Suspense>
        </Canvas>

        <div className="hImg">
          <img src="/hero.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
