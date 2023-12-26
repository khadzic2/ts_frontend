import React, {useEffect, useState} from 'react';

import PageHero from '../layout/PageHero';
import ProductsList from './products/ProductsList';
import { motion } from 'framer-motion';
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

const Products = () => {
  // const [filters,setFilters] = useState(null);
  const [products,setProducts] = useState(null);
  const [categories,setCategories] = useState(null);
  const [search, setSearch] = useState('')

  // const handleDataFromFilters = (data)=>{
  //   setFilters(data);
  // }

  // useEffect(()=>{
  //   if(filters != null){
  //     console.log(filters);
  // //    setProducts(initialProducts)
  //   }
  // },[filters])

  const updateSearch = (e) => {
    let value = e.target.value;
    setSearch(value);
  };

  useEffect(()=>{

  },[search])

  useEffect(()=>{
    let isMounted = true;
    const showAllProducts = async()=>{
      try {
        await axios.get('/api/product').then((response)=>{
          isMounted && setProducts(response.data);
        }).catch((err)=>{
          console.log(err);
        })
      }catch (err){
        console.log(err);
      }
    }

    const showAllCategories = async()=>{
      try {
        await axios.get('/api/category').then((response)=>{
          isMounted && setCategories(response.data);
        }).catch((err)=>{
          console.log(err);
        })
      }catch (err){
        console.log(err);
      }
    }

    showAllProducts().catch((err)=>{
      console.log(err);
    });

    showAllCategories().catch((err)=>{
      console.log(err);
    });

    return ()=>{
      isMounted = false;
    }

  },[])

  return (
      <motion.main
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
      >
        <PageHero title="products" />
        <div className='flex w-[85vw] my-16 mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-12'>
            {/*<div className='sticky lg:col-span-1'>*/}
            {/*  <div className="sticky top-0">*/}
            {/*    /!* search input *!/*/}
            {/*    <div className="mb-4">*/}
            {/*      <input*/}
            {/*          type="text"*/}
            {/*          name="search"*/}
            {/*          value={search}*/}
            {/*          placeholder="Search products"*/}
            {/*          onChange={updateSearch}*/}
            {/*          className="form-input rounded-lg bg-gray-200 border-0 pr-0"*/}
            {/*      />*/}
            {/*    </div>*/}
            {/*    /!* category *!/*/}
            {/*    /!*<div className="mb-6">*!/*/}
            {/*    /!*  <h4 className="mb-1 font-bold capitalize text-lg">category</h4>*!/*/}
            {/*    /!*  <button*!/*/}
            {/*    /!*      value={"All"}*!/*/}
            {/*    /!*      type="button"*!/*/}
            {/*    /!*      name="category"*!/*/}
            {/*    /!*      onClick={updateFilters}*!/*/}
            {/*    /!*      // className="block py-1 capitalize text-gray-600"*!/*/}
            {/*    /!*      className={`block py-1 capitalize text-gray-600 ${filters.category === "All" ? 'border-b-2 border-primary' : ''}`}*!/*/}
            {/*    /!*  >*!/*/}
            {/*    /!*    All*!/*/}
            {/*    /!*  </button>*!/*/}
            {/*    /!*  {categories?.map((c) => {*!/*/}
            {/*    /!*    return (*!/*/}
            {/*    /!*        <button*!/*/}
            {/*    /!*            key={c.id}*!/*/}
            {/*    /!*            value={c}*!/*/}
            {/*    /!*            type="button"*!/*/}
            {/*    /!*            name="category"*!/*/}
            {/*    /!*            onClick={updateFilters}*!/*/}
            {/*    /!*            // className="block py-1 capitalize text-gray-600"*!/*/}
            {/*    /!*            className={`block py-1 capitalize text-gray-600 ${filters.category === c.name ? 'border-b-2 border-primary' : ''}`}*!/*/}
            {/*    /!*        >*!/*/}
            {/*    /!*          {c.name}*!/*/}
            {/*    /!*        </button>*!/*/}
            {/*    /!*    );*!/*/}
            {/*    /!*  })}*!/*/}
            {/*    /!*</div>*!/*/}
            {/*  </div>*/}
            {/*</div>*/}
            <div className='mb-[20rem] md:col-span-1 lg:col-span-4'>
              <div className='w-full flex flex-col'>
                <ProductsList products={products}/>
              </div>
            </div>
          </div>
        </div>
      </motion.main>
  );
};

export default Products;