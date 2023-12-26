import PageHero from "../layout/PageHero";
import {motion} from "framer-motion";
import React from "react";
import image from "../assets/admin.png";

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

const UserProfile = () => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <PageHero title='profile' />
            <div className='mt-16 space-y-16 w-[80vw] mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
                    <div>
                        <h2 className='font-medium text-primary text-5xl tracking-wide mb-5 capitalize'>personal info</h2>
                        <hr className='my-6' />
                        <div className='max-w-3xl tracking-wider text-xl leading-8 text-gray-500 mb-6'>First name: Kanita</div>
                        <br className='my-6'/>
                        <div className='max-w-3xl tracking-wider text-xl leading-8 text-gray-500 mb-6'>Last name: Hadzic</div>
                        <br className='my-6'/>
                        <div className='max-w-3xl tracking-wider text-xl leading-8 text-gray-500 mb-6'>Username: khadzic2</div>
                        <br className='my-6'/>
                        <div className='max-w-3xl tracking-wider text-xl leading-8 text-gray-500 mb-6'>Phone number: 062111111</div>
                        <br className='my-6'/>
                        <div className='max-w-3xl tracking-wider text-xl leading-8 text-gray-500 mb-6'>E-mail: info@gmail.com</div>
                        <hr className='my-6' />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default UserProfile;