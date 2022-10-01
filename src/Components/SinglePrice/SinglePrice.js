import React from 'react';
import PricingFeature from '../PricingFeature/PricingFeature';

const SinglePrice = ({pricing}) => {
    const {name, price, features} = pricing;
    return (
        <div className='shadow p-5 rounded-lg border-t-4 border-green-400 bg-white'>
            <p className="mt-4 text-3xl text-gray-700 font-medium">
                <span className='text-6xl font-bold'>${price}</span>
                <span className='text-2xl text-gray-400'>/mon</span>
            </p>
            <p className='text-3xl text-gray-700 font-medium my-4'>{name}</p>

            <div className="mt-8">
                <ul className="grid grid-cols-1 gap-4">
                    {
                        features.map((feature, index) => (
                            <PricingFeature key={index} feature={feature} />
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default SinglePrice;