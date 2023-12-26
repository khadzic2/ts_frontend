import React, {useState} from 'react';
import { motion } from 'framer-motion';

import PageHero from '../layout/PageHero';
import CartEmpty from './cart/CartEmpty';
import CartContent from "./cart/CartContent";


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

const initialProducts = [{ id:1, name:"aaa", price:999,quantity:1,totalPrice:999},{ id:2, name:"aaa", price:999,quantity:1,totalPrice:999 },{ id:3, name:"aaa", price:999,quantity:1,totalPrice:999 },{ id:4, name:"aaa", price:999 ,quantity:1,totalPrice:999},{ id:5, name:"aaa", price:999,quantity:1,totalPrice:999 },{ id:6, name:"aaa", price:999 ,quantity:1,totalPrice:999}];
const UserCart = () => {
  const [cart] = useState(initialProducts);
  const totalPrice = useState(1000);

  return (
      <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
      >
        <PageHero title='cart' />
        <div className='w-[90%] mx-auto'>
          {cart.length < 1 && <CartEmpty />}
          {cart.length > 0 && <CartContent cart={cart} totalPrice={totalPrice} />}
        </div>
      </motion.div>
  );
};

export default UserCart;