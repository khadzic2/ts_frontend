import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const NavCartButton = () => {
  const [totalQuantity] = useState(0);

  const buttonVariants = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 2px #ffffff",
      boxShadow: "0px 0px 4px #243E8B",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
      <motion.button className='rounded-3xl font-bold py-2 px-3 bg-primary shadow-lg text-white'
                     variants={buttonVariants}
                     whileHover="hover"
      >
        <Link to="/cart" className="flex justify-between items-center ">
          <span className="w-4 h-2 mr-2">
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
                fill='currentColor'
            >
              <g>
                  <path className="st0" d="M486.998,140.232c-8.924-12.176-22.722-19.878-37.785-21.078l-311.616-24.68l-5.665-32.094
                      c-5.179-29.305-28.497-51.998-57.932-56.352l-5.662-0.845L34.65,0.185c-9.385-1.378-18.118,5.09-19.51,14.475
                      c-1.395,9.393,5.086,18.127,14.471,19.514v-0.008l39.357,5.834l0.009,0.026c14.788,2.164,26.526,13.586,29.131,28.324
                      l53.338,302.302c5.005,28.375,29.647,49.047,58.461,49.056h219.192c9.49,0,17.176-7.694,17.176-17.172
                      c0-9.486-7.686-17.18-17.176-17.18H209.906c-12.133,0.009-22.536-8.725-24.642-20.672l-7.461-42.299h244.342
                      c24.189,0,45.174-16.691,50.606-40.262l22.967-99.523C499.118,167.887,495.93,152.424,486.998,140.232z"/>
                  <path className="st0" d="M223.012,438.122c-20.402,0-36.935,16.554-36.935,36.948c0,20.394,16.533,36.931,36.935,36.931
                      c20.401,0,36.944-16.537,36.944-36.931C259.955,454.676,243.413,438.122,223.012,438.122z"/>
                  <path className="st0" d="M387.124,438.122c-20.406,0-36.935,16.554-36.935,36.948c0,20.394,16.529,36.931,36.935,36.931
                      c20.402,0,36.944-16.537,36.944-36.931C424.068,454.676,407.526,438.122,387.124,438.122z"/>
            </g>
            </svg>
          </span>
          <span className='text-white font-bold mr-2'>Cart</span>
          <span className="bg-secondary-200 text-primary rounded-[50%]  px-2 font-bold">{totalQuantity}</span>
        </Link>
      </motion.button>
  );
};

export default NavCartButton;