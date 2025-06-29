import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer, } from 'recharts';
// import { getPath } from 'recharts/types/shape/Curve';

const ChartFee = ({ appointmentList }) => {

    const colors = [
        "red",
        "#F39C12", 
        "yellow", 
        "green", 
        "#4B4453", 
        "#2ECC71", 
        "#3D2C8D", 
        "#F1C40F", 
        "#212121",
        "#3498DB", 
        "#5C5470", 
        "#ECF0F1"  
    ];

    const data = appointmentList;

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };



    return (
        <div className='w-11/12 h-50 md:h-130 mx-auto bg-white rounded-3xl' >

            <ResponsiveContainer width="100%" height="100%">

                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="fee" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>

            </ResponsiveContainer>

        </div>
    );
};

export default ChartFee;