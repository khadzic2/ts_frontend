import React, {useState} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {motion} from "framer-motion";
import {Link, useNavigate} from "react-router-dom";
import {FiLogIn} from "react-icons/fi";
import {RiLockPasswordFill} from "react-icons/ri";
import {MdEmail} from "react-icons/md";
import {FaUserAlt} from "react-icons/fa";
import {FaSquarePhone} from "react-icons/fa6";
import axios from '../api/axios';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

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
};

const Register = () => {
    const navigate = useNavigate();
    const [success, setSuccess] = useState(true);
    const [errMessage, setErrMessage] = useState("");

    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            username:"",
            phone:"",
            email: "",
            password: "",
            password_confirmation: "",
        },
        validationSchema: Yup.object({
            firstname: Yup.string().required("Required"),
            lastname: Yup.string().required("Required"),
            username: Yup.string().matches(USER_REGEX,"Invalid entry").required("Required"),
            phone: Yup.string().matches(/\d+/,"Must be a number").required("Required"),
            email: Yup.string().email("Invalid email address").required("Required"),
            password: Yup.string().matches(PWD_REGEX,"Must contain at least one number, uppercase, lowercase and special character").required("Required"),
            password_confirmation: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords must much")
                .required("Required"),
        }),
        onSubmit: async (values) => {
            try {
                await axios.post('/api/user',
                    JSON.stringify({
                        username: values.username,
                        firstName: values.firstname,
                        lastName: values.lastname,
                        email: values.email,
                        phoneNumber: values.phone,
                        password: values.password,
                        roleId: 2,
                    }),
                    {
                        headers: {'Content-Type': 'application/json'},
                    }
                ).then((response) => {
                    setSuccess(true);
                    console.log(response.data);
                    navigate('/login');
                }).catch((err) => {
                    setSuccess(false);
                    setErrMessage(err.response.data.message);
                    console.log(err.response.data.message);
                });
            }catch (err) {
                console.log(err);
            }
        },
    });

    return (
        <div className="h-full bg-secondary-200 py-40">
            <motion.div className="w-[80%] mx-auto my-auto"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
            >
                <div className="w-[320px] sm:w-[400px] rounded shadow-lg shadow-black border-2 border-solid px-4 sm:px-8 py-20 mx-auto bg-white">
                    <h2 className="text-3xl uppercase tracking-wider font-bold text-center mb-12 select-none">
                        <span className="text-primary">web</span>
                        <span className="text-secondary-200">shop</span>
                    </h2>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="flex flex-col space-y-1 mb-4">
                            <label htmlFor="firstname" className="font-semibold tracking-wider">
                                First name
                            </label>
                            <div className="flex py-1">
                                <span className="flex items-center justify-center border border-gray-300 border-r-0 py-2 px-3 bg-gray-300  text-black">
                                    <FaUserAlt />
                                </span>
                                <input
                                    type="text"
                                    name="firstname"
                                    id="firstname"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.firstname}
                                    className="form-input rounded-r w-full"
                                    placeholder="Your first name"
                                />
                            </div>
                            {formik.touched.firstname && formik.errors.firstname && (
                                <p className="text-xs font-semibold text-red-600">
                                    {formik.errors.firstname}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col space-y-1 mb-4">
                            <label htmlFor="lastname" className="font-semibold tracking-wider">
                                Last name
                            </label>
                            <div className="flex py-1">
                                <span className="flex items-center justify-center border border-gray-300 border-r-0 py-2 px-3 bg-gray-300  text-black">
                                    <FaUserAlt />
                                </span>
                                <input
                                    type="text"
                                    name="lastname"
                                    id="lastname"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.lastname}
                                    className="form-input rounded-r w-full"
                                    placeholder="Your last name"
                                />
                            </div>
                            {formik.touched.lastname && formik.errors.lastname && (
                                <p className="text-xs font-semibold text-red-600">
                                    {formik.errors.lastname}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col space-y-1 mb-4">
                            <label htmlFor="lastname" className="font-semibold tracking-wider">
                                Username
                            </label>
                            <div className="flex py-1">
                                <span className="flex items-center justify-center border border-gray-300 border-r-0 py-2 px-3 bg-gray-300  text-black">
                                    <FaUserAlt />
                                </span>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.username}
                                    className="form-input rounded-r w-full"
                                    placeholder="Username"
                                />
                            </div>
                            {formik.touched.username && formik.errors.username && (
                                <p className="text-xs font-semibold text-red-600">
                                    {formik.errors.username}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col space-y-1 mb-4">
                            <label htmlFor="phone" className="font-semibold tracking-wider">
                                Phone number
                            </label>
                            <div className="flex py-1">
                                <span className="flex items-center justify-center border border-gray-300 border-r-0 py-2 px-3 bg-gray-300  text-black">
                                    <FaSquarePhone />
                                </span>
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.phone}
                                    className="form-input rounded-r w-full"
                                    placeholder="Your phone number"
                                />
                            </div>
                            {formik.touched.phone && formik.errors.phone && (
                                <p className="text-xs font-semibold text-red-600">
                                    {formik.errors.phone}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col space-y-1 mb-4">
                            <label htmlFor="email" className="font-semibold tracking-wider">
                                Email
                            </label>
                            <div className="flex py-1">
                                <span className="flex items-center justify-center border border-gray-300 border-r-0 py-2 px-3 bg-gray-300  text-black">
                                    <MdEmail />
                                </span>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    className="form-input rounded-r w-full"
                                    placeholder="example@domain.com"
                                />
                            </div>
                            {formik.touched.email && formik.errors.email && (
                                <p className="text-xs font-semibold text-red-600">
                                    {formik.errors.email}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col space-y-1 mb-4">
                            <label htmlFor="password" className="font-semibold tracking-wider">
                                Password
                            </label>
                            <div className="flex py-1">
                                <span className="flex items-center justify-center border border-gray-300 border-r-0 py-2 px-3 bg-gray-300  text-black">
                                    <RiLockPasswordFill />
                                </span>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                    className="form-input rounded-r w-full"
                                    placeholder="********"
                                />
                            </div>
                            {formik.touched.password && formik.errors.password && (
                                <p className="text-xs text-red-600">{formik.errors.password}</p>
                            )}
                        </div>
                        <div className="flex flex-col space-y-1 mb-4">
                            <label
                                htmlFor="password_confirmation"
                                className="font-semibold tracking-wider"
                            >
                                Confirm Password
                            </label>
                            <div className="flex py-1">
                                <span className="flex items-center justify-center border border-gray-300 border-r-0 py-2 px-3 bg-gray-300  text-black">
                                    <RiLockPasswordFill />
                                </span>
                                <input
                                    type="password"
                                    name="password_confirmation"
                                    id="password_confirmation"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password_confirmation}
                                    className="form-input rounded-r w-full"
                                    placeholder="********"
                                />
                            </div>
                            {formik.touched.password_confirmation &&
                                formik.errors.password_confirmation && (
                                    <p className="text-xs text-red-600">
                                        {formik.errors.password_confirmation}
                                    </p>
                                )
                            }
                        </div>
                        <hr />
                        {
                            !success &&
                            <p className="text-xs font-semibold text-red-600">
                                    {errMessage}
                            </p>
                        }
                        <button
                            type="submit"
                            className="px-4 py-2 block mt-3 ml-auto text-primary border border-primary hover:text-white hover:bg-primary rounded-md"
                        >
                            <span className="inline-flex justify-items-center mr-1">
                              <FiLogIn />{" "}
                            </span>
                            Sign up
                        </button>
                    </form>
                    <p className="text-center mt-6">
                        Already have an account?{" "}
                        <Link to="/login" className="text-primary">
                            Sign in
                        </Link>{" "}
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Register;