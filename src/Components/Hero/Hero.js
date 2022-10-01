import React from 'react';
import { Link } from 'react-router-dom';

const Hero = ({title}) => {
    return (
        <div>
            <section className="bg-gray-400 text-white">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">This is {title} page</h1>
                        <p className="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
                        <div className="flex justify-center">
                            <Link to='/contact' className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Contact</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;