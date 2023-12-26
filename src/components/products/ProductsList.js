import React from 'react';

import GridView from './GridView';


const ProductsList = ({products}) => {

    if (products?.length < 1) {
        return (
            <div className='w-full'>
                <p className='mx-auto'>Sorry, no products matched your search.</p>
            </div>
        );
    }

    return <GridView products={products} />

};

export default ProductsList;