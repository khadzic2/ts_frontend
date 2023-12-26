import React from "react";
import {useNavigate} from "react-router-dom";

const Unauthorized = () => {
    const navigate = useNavigate();
    return (
        <div className='h-screen w-full bg-secondary-200'>
            <div className='h-full flex flex-col justify-center items-center text-center my-auto mx-auto'>
                <h1 className='text-[6rem] text-primary tracking-widest font-extrabold'>Unauthorized</h1>
                <h2 className='text-4xl font-semibold text-primary'>You do not have access to the requested page.</h2>
                <button onClick={() => navigate('/', {replace: true})} className='uppercase px-6 py-2 rounded-md text-lg bg-primary text-secondary-200 font-bold mt-12 shadow-lg'>Back home</button>
            </div>
        </div>
    );
}

export default Unauthorized;