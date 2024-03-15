import React from 'react'


// Define product data
const article = [
    {
        id: 11,
        name: 'Luxury Kitchen Designs of 2024',
        category: "Home Decor",
        image: 'Trends1.png',
        info: "Explore the latest luxury kitchen designs and elevate your home decor game.",
        author_image: 'https://i.pravatar.cc/',
        author_name: 'Michael Smith',
        posted_at: 'March 3, 2024 • 8 min read'
    }
    ,
    {
        id: 12,
        name: 'Gardening Tips for Urban Dwellers',
        category: "Gardening",
        image: 'Trends2.png',
        info: "Learn how to create a thriving garden in the limited space of your urban apartment.",
        author_image: 'https://i.pravatar.cc/',
        author_name: 'Sophia Lee',
        posted_at: 'February 28, 2024 • 6 min read'
    }
    ,
    {
        id: 13,
        name: 'Sustainable Living: Eco-Friendly Home Ideas',
        category: "Sustainability",
        image: 'Trends3.png',
        info: "Discover innovative ways to make your home more environmentally friendly and sustainable.",
        author_image: 'https://i.pravatar.cc/',
        author_name: 'David Green',
        posted_at: 'March 10, 2024 • 7 min read'
    }
    ,
    {
        id: 14,
        name: 'DIY Projects for Upcycling Old Furniture',
        category: "DIY",
        image: 'Trends2.png',
        info: "Get inspired to transform your old furniture into stylish and unique pieces with these DIY projects.",
        author_image: 'https://i.pravatar.cc/',
        author_name: 'Emma Brown',
        posted_at: 'March 5, 2024 • 9 min read'
    }
    ,

];

interface Article {
    name: string,
    category: string,
    info: string,
    author_image: string,
    posted_at: string,
    image: string
    author_name: string
}

const ArticleCard = (article: Article) => {
    return (
        <div className='w-[380px] h-[500px]'>
            <img src={article.image} alt={article.name} />
            <p className='mt-[32px] text-[#78798E] text-[14px]'>{article.category}</p>
            <h2 className='font-bold py-2 text-[18px] h-[60px]'>{article.name}</h2>
            <p className='text-[16px] h-[30px]'>{article.info}</p>
            <div className='flex mt-10'>
                <img src={article.author_image} className='rounded-full h-[48px] w-[48px]' />
                <div className='flex flex-col justify-center mx-2 text-[12px]'>
                    <p>{article.author_name}</p>
                    <p>{article.posted_at}</p>
                </div>
            </div>
        </div>
    );
};




const ArticleSlide = () => {
    return (
        <div className='flex lg:w-full lg:h-full lg:flex-wrap mt-[80px] z-10 relative mx-5 xl:mx-[120px] overflow-scroll '>
            <div className='flex lg:flex-wrap gap-5 '>
                {article.map(article => (
                    <ArticleCard key={article.id} name={article.name} image={article.image} category={article.category} info={article.info} author_image={article.author_image} posted_at={article.posted_at} author_name={article.author_name} />
                ))}
            </div>
        </div>
    )
}

export default ArticleSlide