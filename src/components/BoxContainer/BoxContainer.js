import React from 'react';
import Box from '../Box/Box';


const services=[
    {
        title: "Live Video Consultation",
        description:"Instant video consultancy now or schedule.",
        img:"/appointment.png"
    },
    {
        title: "Order Medical online",
        description: "you can order and buy medicine from online.",
        img:'/blood.png'
    },
    {
        title:"Blood bank",
        description: "Find your blood from the selective area.",
        img:'/blood.png'
    },
    {
        title:"Health Package",
        description:"Your whole family can select family plan at a low cost.",
        img:'/blood.png'
    }
]

const BoxContainer = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
                services.map((service)=> <Box service={service}></Box> )
            }
        </div>
    );
};

export default BoxContainer;