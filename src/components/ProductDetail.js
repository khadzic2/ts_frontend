import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

// import ProductImages from '../components/productDetail/ProductImages';
import PageHero from '../layout/PageHero';
import AddToCart from '../components/AddToCart';
import image from '../assets/admin.png'
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
}



const ProductDetail = () => {
 const { productId } = useParams();
 const [product,setProduct] = useState(null);

 useEffect(() => {
  let isMounted = true;
  const getProduct = async()=>{

     try {
       await axios.get('/api/product/'+productId).then((response)=>{
        isMounted && setProduct(response.data);
       }).catch((err)=>{
        console.log(err);
       })
      }catch (err){
       console.log(err);
      }
     }

     getProduct().catch((err)=>{
      console.log(err);
     });

     return ()=>{
      isMounted = false;
     }

  }, [productId]);

 // const name = product.name;
 // const description = product.description;
 // const price = product.price;
 // const {
 //  id,
 //  name,
 //  description,
 //  price,
 //  brand,
 //  company,
 //  sku
 // // images
 // } = product;

 return (
     <motion.div className='mb-48'
                 variants={containerVariants}
                 initial="hidden"
                 animate="visible"
                 exit="exit"
     >
      <PageHero title={product?.name} product />
      <div className='mt-16 space-y-16 w-[80vw] mx-auto'>
       <Link to='/products' className='uppercase bg-primary px-4 py-2 rounded text-white font-semibold shadow-lg'>
        back to products
       </Link>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
         <div>
          <img src={image} alt="" className='h-[350px] w-full block rounded object-contain' />
         </div>
         <div>
          <h2 className='font-bold text-5xl tracking-wide mb-5'>{product?.name}</h2>
          <h4 className='text-xl font-extrabold text-secondary-200 tracking-widest italic my-4'>Price:{product?.price}</h4>
          <p className='max-w-3xl tracking-wider leading-8 text-gray-500 mb-6'>{product?.info}</p>
          <p className='max-w-3xl tracking-wider leading-8 text-gray-500 mb-6'>{product?.size}</p>
          <p className='max-w-3xl tracking-wider leading-8 text-gray-500 mb-6'>{product?.color}</p>
          <hr className='my-6' />
          <AddToCart product={product} />
         </div>
        </div>
      </div>
     </motion.div>
 );
};

export default ProductDetail;