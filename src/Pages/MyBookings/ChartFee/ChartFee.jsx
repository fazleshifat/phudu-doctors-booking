import React from 'react';
import { BarChart, Bar,  XAxis, YAxis,ResponsiveContainer } from 'recharts';

const ChartFee = () => {


    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        }
    ];

    return (
        <div className='w-11/12 h-52 mx-auto' >
            <ResponsiveContainer width="100%" height="100%">

                <BarChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >

                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="uv" fill="#8884d8">

                    </Bar>
                </BarChart>

            </ResponsiveContainer>


        </div>
    );
};

export default ChartFee;