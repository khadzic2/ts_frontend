import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const NavOrdersButton = () => {

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
        <motion.button className='rounded-3xl font-bold py-2 px-3 ml-2 bg-primary shadow-lg text-white'
                       variants={buttonVariants}
                       whileHover="hover"
        >
            <Link to="/orders" className="flex justify-between items-center ">
              <span className="w-4 h-2 mr-2">
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                    fill='currentColor'
                    width="100"
                    height="100"
                >
                  <g>
                    <g>
                        <path d="M78.8,62.1l-3.6-1.7c-0.5-0.3-1.2-0.3-1.7,0L52,70.6c-1.2,0.6-2.7,0.6-3.9,0L26.5,60.4
                            c-0.5-0.3-1.2-0.3-1.7,0l-3.6,1.7c-1.6,0.8-1.6,2.9,0,3.7L48,78.5c1.2,0.6,2.7,0.6,3.9,0l26.8-12.7C80.4,65,80.4,62.8,78.8,62.1z"
                        />
                    </g>
                    <g>
                        <path d="M78.8,48.1l-3.7-1.7c-0.5-0.3-1.2-0.3-1.7,0L52,56.6c-1.2,0.6-2.7,0.6-3.9,0L26.6,46.4
                            c-0.5-0.3-1.2-0.3-1.7,0l-3.7,1.7c-1.6,0.8-1.6,2.9,0,3.7L48,64.6c1.2,0.6,2.7,0.6,3.9,0l26.8-12.7C80.4,51.1,80.4,48.9,78.8,48.1
                            z"/>
                    </g>
                    <g>
                        <path d="M21.2,37.8l26.8,12.7c1.2,0.6,2.7,0.6,3.9,0l26.8-12.7c1.6-0.8,1.6-2.9,0-3.7L51.9,21.4
                            c-1.2-0.6-2.7-0.6-3.9,0L21.2,34.2C19.6,34.9,19.6,37.1,21.2,37.8z"/>
                    </g>
                </g>
                </svg>
              </span>
              <span className='text-white font-bold mr-2'>Orders</span>
            </Link>
        </motion.button>
    );
};

export default NavOrdersButton;