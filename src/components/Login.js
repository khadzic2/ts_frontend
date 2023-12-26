import React, {useState} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from 'framer-motion';
import {Link, useNavigate} from "react-router-dom";
import {RiLockPasswordFill} from "react-icons/ri";
import {FiLogIn} from "react-icons/fi";
import {FaUserAlt} from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import axios from "../api/axios";

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




const Login = () => {
    const navigate = useNavigate();
    const {setAuth} = useAuth();

    const [errorMes, setErrorMess] = useState(null);

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Required"),
            password: Yup.string().required("Required"),
        }),
        onSubmit: async (values) => {
            try{
                const username = values.username;
                const response = await axios.get('/api/user/username/'+username);
                const role = response.data.role.name;
                const passwd = response.data.password;

                setAuth({username,passwd,role});
                console.log(role);
                console.log(passwd);
                navigate('/');
            }catch (err){
                console.log(err.response.data.message);
                setErrorMess("Username or password is not valid.");
            }
            // try {
            //     await dispatch(login(values));
            // } catch (error) {
            //     console.log(error);
            // }
          //  navigate('/');
        },
    });

    return (
        <div className="h-full bg-secondary-200 py-40">
        <motion.div className="w-[-80px] mx-auto my-auto"
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
                        <label htmlFor="username" className="font-semibold tracking-wider">
                            Username
                        </label>
                        <div className="flex py-1">
                        <span className="flex items-center justify-center border border-gray-300 border-r-0 py-2 px-3 bg-gray-300  text-black">
                            <FaUserAlt/>
                        </span>
                        <input
                                type="text"
                                name="username"
                                id="username"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.username}
                                className="form-input rounded-r w-full"
                                placeholder="username"
                            />
                        </div>
                        {formik.touched.username && formik.errors.username && (
                            <p className="text-xs font-semibold text-red-600">
                                {formik.errors.username}
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
                    <hr />
                    {
                        errorMes &&
                        <p className="text-xs font-semibold text-red-600">
                            {errorMes}
                        </p>
                    }
                    <button
                        type="submit"
                        className="px-4 py-2 block mt-3 ml-auto text-primary border border-primary hover:text-white hover:bg-primary rounded-md"
                    >
                        <span className="inline-flex justify-items-center mr-1"><FiLogIn /> </span>
                        Log in
                    </button>
                </form>
                <p className="text-center mt-6">Not registered? <Link to='/register' className="text-primary">Create an account</Link> </p>
            </div>
        </motion.div>
        </div>
    );
};

export default Login;
