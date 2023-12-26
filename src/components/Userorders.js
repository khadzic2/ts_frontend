import PageHero from "../layout/PageHero";
import {motion} from "framer-motion";
import React from "react";
import OrdersContent from "./OrdersContent";

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

const UserOrders = () => {
  return (
      <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
      >
        <PageHero title='orders' />
        <OrdersContent/>
      </motion.div>
  );
}

export default UserOrders;