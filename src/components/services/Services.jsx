import TankModelContainer from './tank/TankModelContainer';
import './services.css';
import GoldModelContainer from './gold/GoldModelContainer';
import ComputerModelContainer from './computer/computerModelContainer';
import Counter from './Counter';
import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';

const textVariatns = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const listVariants = {
  initial: { opacity: 0, x: -100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.3, // çocuklar arası gecikme
    },
  },
};

const ServicesList = [
  {
    id: 1,
    img: '/macbook000.png',
    title: 'Macbook',
    counter: 35,
  },
  {
    id: 2,
    img: '/gold000.png',
    title: 'Gold',
    counter: 99,
  },
  {
    id: 3,
    img: '/tank000.png',
    title: 'Tank',
    counter: 49,
  },
];

const Services = () => {
  const [currentServiceId, setcurrentServiceId] = useState(1);
  const ref = useRef();
  const isInView = useInView(ref, { margin: '-200px' });
  return (
    <div ref={ref} className="services-component">
      <div className="Section left">
        <motion.h1
          variants={textVariatns}
          animate={isInView ? 'animate' : 'initial'}
          className="sTitle"
        >
          How Can We Help ?{' '}
        </motion.h1>
        <motion.div
          variants={listVariants}
          animate={isInView ? 'animate' : 'initial'}
          className="serviceList"
        >
          {ServicesList.map((Service) => (
            <motion.div
              variants={listVariants}
              className="service"
              key={Service.id}
              onClick={() => {
                setcurrentServiceId(Service.id);
              }}
            >
              <div className="serviceIcon">
                <img src={Service.img} alt="" />
              </div>
              <div className="serviceInfo">
                <h2>{Service.title}</h2>
                <h3>{Service.counter}k</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="counterList">
          <Counter from={0} to={100} text="million" />
          <Counter from={0} to={72} text="million" />
        </div>
      </div>
      <div className="Section right">
        {
          /* */
          currentServiceId === 1 ? (
            <ComputerModelContainer />
          ) : currentServiceId === 2 ? (
            <GoldModelContainer />
          ) : (
            <TankModelContainer />
          )
        }
      </div>
    </div>
  );
};
export default Services;
