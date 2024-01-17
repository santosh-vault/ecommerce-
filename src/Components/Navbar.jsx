import React, { useState } from 'react';
import { FaSearch, FaCartArrowDown } from 'react-icons/fa';
import { RiAccountCircleFill } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    const navItems = [
        { title: 'Home', path: '/' },
        { title: 'Clothing', path: '/clothing' },
        { title: 'Accessories', path: '/accessories' },
        { title: 'Arts', path: '/arts' },
        { title: 'Tools', path: '/tools' },
        { title: 'Furniture', path: '/furniture' },
    ];

    return (
<div className='flex flex-col'>

            <div className='bg-gray-950 flex justify-between items-center container mx-auto py-4 px-10 '  style={{ boxShadow: "10px 10px 60px #FFD700" }}>
                <div className='flex items-center'>
                    <FaSearch className='text-yellow-500 mr-2' />
                </div>

                <div>
                    <h1 className='text-2xl font-bold' style={{ color: '#FFD700' }}>
                        luxuryHub
                    </h1>
                </div>

                <div className='flex items-center gap-4'>
                    <RiAccountCircleFill className='text-xl text-yellow-500' />
                    <FaCartArrowDown className='text-xl text-yellow-500' />
                </div>

                <button onClick={toggleMenu} className='lg:hidden'>
                    <GiHamburgerMenu className='text-2xl text-yellow-500' />
                </button>

            </div>

            <div className={`bg-gray-950 ${open ? 'block' : 'hidden'} lg:flex sm:flex flex-col`}>
                <ul className='flex flex-col p-4 gap-16 items-center justify-between mx-auto sm:flex-row'>
                    {navItems.map((navItem, index) => (
                        <li key={index}>
                            <a href={navItem.path} className='text-yellow-500 hover:text-yellow-400'>
                                {navItem.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
