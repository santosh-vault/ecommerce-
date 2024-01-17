import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    const logos = [
        { id: '1', image: 'https://placekitten.com/100/100' },
        { id: '2', image: 'https://placekitten.com/100/101' },
        { id: '3', image: 'https://placekitten.com/100/102' },
        { id: '4', image: 'https://placekitten.com/100/103' },
        { id: '5', image: 'https://placekitten.com/100/104' },
    ];

    return (
        <div className='bg-gray-950 '>
            <div className=' py-4 flex xl:mx-28 mb-4 items-center justify-center' style={{ boxShadow: "inset 1px 1px 10px #FFD700" }}>
                {logos.map((logo) => (
                    <div key={logo.id} className="flex items-center justify-around flex-row mx-6 my-8">
                        <img src={logo.image} alt={`Logo ${logo.id}`} className="w-28 h-28 rounded-full shadow-lg border-4 border-yellow-500" />
                    </div>
                ))}
            </div>

            <div className='xl:mx-28'>
                <h1>Explore New Designs Now</h1>
                <div>
                    <Link to='/'>
                        <img src="https://placekitten.com/200/200" alt="Design 1" />
                    </Link>
                </div>
                <div className='grid gap-2'>
                    <Link to="/">
                        <img src="https://placekitten.com/200/200" alt="Design 2" />
                    </Link>
        
                </div>
            </div>
        </div>
    );
};

export default Category;
