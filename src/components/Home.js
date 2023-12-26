import React from "react";
import { motion } from 'framer-motion';
import HomeIcon from "../assets/homepagepicture.png";

const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: { duration: .3 }
    },
    exit: {
        x: '-100vw',
        transition: { ease: 'easeInOut' }
    }
}

const underlineAnimate = {
    hidden: {
        opacity: 0,
        pathLength: 0,
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            delay: 0.8,
            duration: .6,
        },
    },
};

const headerAnimate = {
    hidden: {
        opacity: 0,
        y: 25,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8
        }
    },
};

const Home = () => {
    return (
        <motion.main
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div>
                <div className="absolute top-1/4 -left-8 w-40 h-40 xl:w-72 xl:h-60 bg-secondary-200 rounded-2xl transform-gpu -rotate-12 z-[-1]"></div>
                <div className='w-full h-screen flex flex-col justify-between px-8 py-12 z-10'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="flex flex-col mt-16">
                            <motion.h1 className="text-4xl md:text-5xl lg-text-7xl 2xl:text-8xl font-bold text-primary"
                                       variants={headerAnimate}
                                       initial="hidden"
                                       animate="visible"
                            >
                                Welcome to our
                                <br/>
                                webshop
                                <svg
                                    className="svg-underline stroke-[#ffb81c] relative z-10 w-64 md:w-1/2 lg:w-3/4"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth={5}
                                    viewBox="0 0 422 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <motion.path
                                        d="M3 9C118.957 4.47226 364.497 -1.86658 419 9"
                                        variants={underlineAnimate}
                                        initial="hidden"
                                        animate="visible"
                                    />
                                </svg>
                            </motion.h1>
                        </div>
                        <motion.div className="block mx-auto"
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: .4 }}
                        >
                            <img className="h-[75%]" src={HomeIcon} alt="" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.main>
    );
};

export default Home;