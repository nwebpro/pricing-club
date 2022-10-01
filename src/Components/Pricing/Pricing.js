import React from 'react';
import { pricingTableData } from '../Constants/index';
import SinglePrice from '../SinglePrice/SinglePrice';

const Pricing = () => {
    return (
        <div className='container mx-auto grid md:grid-cols-3 gap-5 mb-5 md:mb-0 py-12 px-4 md:px-0'>
            {
                pricingTableData.map(pricing => (
                    <SinglePrice key={pricing.id} pricing={pricing} />
                ))
            }
        </div>
    );
};

export default Pricing;