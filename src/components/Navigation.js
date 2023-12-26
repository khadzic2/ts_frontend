import React from "react";
import {NavLink, useNavigate} from "react-router-dom";
import { motion } from "framer-motion";
import useAuth from "../hooks/useAuth";
import NavCartButton from "./NavCartButton";
import NavOrdersButton from "./NavOrdersButton";
import useLogout from "../hooks/useLogout";
import AccountIcon from "../assets/account.svg"
const Navigation = () => {
    const {auth} = useAuth();
    const navigate = useNavigate();
    const logout = useLogout();

    const svgVariants = {
        hidden: { rotate: -180 },
        visible: {
            rotate: 0,
            transition: { duration: 1 },
        },
    };

    const pathVariants = {
        hidden: {
            opacity: 0,
            pathLength: 0,
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            transition: {
                duration: 3,
                ease: "easeInOut",
            },
        },
    };

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

    const logoutUser = () => {
        logout();
        navigate('/');
    }

    return (
        <div className="w-full h-[80px]">
            <div className="flex  justify-between items-center w-full h-full px-8 sm:mb-6">
                <div className="flex">
                    <div className="flex items-center">
                        <motion.div
                            className="w-[50px] h-[50px]"
                            drag
                            dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                            dragElastic={0.7}
                        >
                            {/* <NavLink to='/'><img src={Logo} alt="" /></NavLink> */}
                            <NavLink to="/">
                                <motion.svg
                                    height="50"
                                    width="50"
                                    version="1.1"
                                    id="Capa_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 512 512"
                                    xmlSpace="preserve"
                                    variants={svgVariants}
                                    initial="hidden"
                                    animate="visible"
                                    fill="#243E8B"
                                >
                                    <motion.path
                                        d="M403.5 455.41A246.17 246.17 0 01256 504C118.81 504 8 393 8 256 8 118.81 119 8 256 8a247.39 247.39 0 01165.7 63.5 3.57 3.57 0 01-2.86 6.18A418.62 418.62 0 00362.13 74c-129.36 0-222.4 53.47-222.4 155.35 0 109 92.13 145.88 176.83 178.73 33.64 13 65.4 25.36 87 41.59a3.58 3.58 0 010 5.72zM503 233.09a3.64 3.64 0 00-1.27-2.44c-51.76-43-93.62-60.48-144.48-60.48-84.13 0-80.25 52.17-80.25 53.63 0 42.6 52.06 62 112.34 84.49 31.07 11.59 63.19 23.57 92.68 39.93a3.57 3.57 0 005-1.82A249 249 0 00503 233.09z"
                                        variants={pathVariants}
                                        initial="hidden"
                                        animate="visible"
                                    />
                                </motion.svg>
                            </NavLink>
                        </motion.div>
                        <motion.div
                            initial={{ y: -250 }}
                            animate={{ y: 0 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
                        >
                            <NavLink to="/">
                                <h1 className="text-3xl font-bold ml-2 select-none">
                                    <span className="text-primary">WEB</span>
                                    <span className="text-secondary-200">SHOP.</span>
                                </h1>
                            </NavLink>
                        </motion.div>
                    </div>
                    <ul className="hidden md:flex items-center lg:ml-8">
                        <li>
                            <NavLink className="ml-4 p-2 lg:text-lg text-primary font-semibold" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="ml-2 p-2 lg:text-lg text-primary font-semibold"
                                to="/products"
                            >
                                Products
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="hidden md:flex">
                    {auth?.role?.match("USER") && (<NavCartButton />)}
                    {auth?.role?.match("USER") && (<NavOrdersButton />)}
                    {!auth?.role?.match("USER") && (
                        <NavLink to="/login">
                            <motion.button className="border-primary border-4 text-primary font-bold px-4 py-2 ml-2 rounded-full shadow-lg"
                                           variants={buttonVariants}
                                           whileHover="hover"
                            >
                                Log in
                            </motion.button>
                        </NavLink>)}

                    {!auth?.role?.match("USER") && (
                        <NavLink to="/register">
                            <motion.button className="border-primary border-4 text-primary font-bold px-4 py-2 ml-2 rounded-full shadow-lg"
                                           variants={buttonVariants}
                                           whileHover="hover"
                            >
                                Register
                            </motion.button>
                        </NavLink>
                    )}

                    {auth?.role?.match("USER") && (
                        <motion.button
                            onClick={logoutUser}
                            className="border-primary border-4 text-primary font-bold px-4 py-2 mx-2 rounded-full shadow-lg"
                            variants={buttonVariants}
                            whileHover="hover"
                        >
                            Log out
                        </motion.button>
                    )}

                    {auth?.role?.match("USER") && (
                        <NavLink to="/profile">
                            <img src={AccountIcon} alt="" />
                        </NavLink>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navigation;
