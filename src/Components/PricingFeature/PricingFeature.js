import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const PricingFeature = ({feature}) => {
    return (
        <div>
            <li className="inline-flex items-center text-gray-600">
                <CheckCircleIcon className='w-5 h-5 text-green-500' />
                <span className='ml-2'>{feature}</span>   
            </li>
        </div>
    );
};

export default PricingFeature;