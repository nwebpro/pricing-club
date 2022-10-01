import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { assignmentMark } from '../Constants/index';

const AssignmentMark = () => {
    return (
        <div className='container mx-auto pb-12'>
            <LineChart 
                    width={700} 
                    height={400} 
                    data={assignmentMark}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <Line type="monotone" dataKey="title" stroke="#82ca9d" />
                <Line type="monotone" dataKey="mark" stroke="#82ca9d" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default AssignmentMark;