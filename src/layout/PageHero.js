import React from 'react';

import { Link } from 'react-router-dom';

const PageHero = ({ title, product }) => {
    return (
        <div className='bg-secondary-200 w-full min-h-[15vh] flex items-center'>
            <div className='w-[80vw] mx-auto'>
                <h3 className='sm:text-xl md:text-[2rem] capitalize font-medium tracking-wider text-gray-400'>
                    <Link className='text-primary' to="/">Home </Link>
                    {product && <Link className='text-primary' to="/products">/ Products </Link>}/ {title}
                </h3>
            </div>
        </div>
    );
};

export default PageHero;