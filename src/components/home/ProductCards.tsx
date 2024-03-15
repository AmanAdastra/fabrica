import React from 'react';

// Define product data
const products = [
    { id: 1, name: 'Stylish Soft Chair', price: 20, image: 'ChairPic1.png' },
    { id: 2, name: 'Modern Soft Chair', price: 20, image: 'ChairPic2.png' },
    { id: 3, name: 'Comfortable Soft Chair', price: 20, image: 'ChairPic3.png' },
    { id: 4, name: 'New Soft Chair', price: 20, image: 'ChairPic4.png' },
];

interface Products {
    name: string,
    price: number,
    image: string
}

const ProductCard = (product: Products) => {
    return (
        <div className='w-[276px] h-[312px]'>
            <img src={product.image} alt={product.name} />
            <p className='mt-[32px] text-[#78798E] text-[14px]'>{product.name}</p>
            <div className='flex gap-1'>
                <div className='h-[10px] w-[10px] rounded-full bg-[#E7C4AB]'>
                </div>
                <div className='h-[10px] w-[10px] rounded-full bg-[#ABD1E7]'>
                </div>
                <div className='h-[10px] w-[10px] rounded-full bg-[#CCABE7]'>
                </div>
                <div className='h-[10px] w-[10px] rounded-full bg-[#AFABE7]'>
                </div>
            </div>
            <p className='mt-[8px] text-[12px] font-bold'>${product.price}</p>
        </div>
    );
};

const ProductCards = () => {
    return (
        <div className='flex lg:w-full lg:h-full lg:flex-wrap mt-[80px] z-10 relative mx-5 xl:mx-[120px] overflow-scroll '>
            <div className='flex lg:flex-wrap gap-5 '>
                {products.map(product => (
                    <ProductCard key={product.id} name={product.name} price={product.price} image={product.image} />
                ))}
            </div>
        </div>
    );
};

export default ProductCards;
