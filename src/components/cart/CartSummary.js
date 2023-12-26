import React from 'react';
import { Link } from 'react-router-dom';


const CartSummary = ({ totalPrice }) => {
    return (
        <div className='flex flex-col border-2 border-solid border-primary rounded-xl text-center p-5'>
            <h2 className='uppercase text-primary text-2xl tracking-wide'>order summary</h2>
            <div className='my-4 flex justify-between text-primary'>
                <span className='capitalize text-xl font-bold'>total</span>
                <span className='italic'>{totalPrice}</span>
            </div>
            <Link to='/orders' className='block w-full uppercase p-3 text-secondary-200 bg-primary font-semibold'>
                place order
            </Link>
        </div>
    );
};


export default CartSummary;