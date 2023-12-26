import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import imageA from '../../assets/admin.png'

const GridView = ({ products }) => {
  //  const [image,setImage] = useState(null);

    useEffect(()=>{},[])
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-6 gap-x-12'>
            {products?.map((product) => {
                const { id, name, price} = product;
                // console.log(image.type);
                return (
                    <div key={id}>
                        <div className='relative rounded-md'>
                            <Link to={`/products/${id}`} className='flex items-center justify-center absolute bg-[#222] w-full h-[175px] rounded-md opacity-0 hover:opacity-70 transition-all duration-300'>
                                <span className='flex items-center justify-center bg-secondary-100 w-10 h-10 rounded-full'>
                                    <FaSearch />
                                </span>
                            </Link>
                            <img className='w-full h-[175px] block object-contain rounded' src={imageA} alt={name} />
                            {/*<img className='w-full h-[175px] block object-contain rounded' src={"data:image/jpeg;base64," + image.imageData} alt={name} />*/}
                        </div>
                        <footer className='flex flex-col mt-4 items-center'>
                            <h4 className='mb-0 font-normal'>{name}</h4>
                            <p className='mb-0 font-normal text-secondary-100 tracking-widest'>{price}</p>
                        </footer>
                    </div>
                );
            })}
            </div>
        </div>
    );
};

export default GridView;