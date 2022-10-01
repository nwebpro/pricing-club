import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/solid'
import { navLinks } from '../Constants/index';

const Navbar = () => {
  const [isExpanded, toggleExpansion] = useState(false);
    return (
        <header className='bg-teal-500 p-6 sticky top-0'>
            <nav className="container mx-auto flex items-center justify-between flex-wrap">
                <div className="flex items-center flex-shrink-0 text-white mr-6 text-2xl">
                    <Link to='/'>Logo</Link>
                </div>
                <div className="block lg:hidden">
                    <Bars3Icon onClick={() => toggleExpansion(!isExpanded)} className="h-6 w-6 cursor-pointer text-white"/>
                </div>
                <div className={`${ isExpanded ? `block` : `hidden` } justify-end w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
                    <div className="text-sm">
                        {
                            navLinks.map(link => (
                                <Link key={link.id} to={link.id} className="text-base block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">{link.title}</Link>
                            ))
                        }
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;