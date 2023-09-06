import Image from 'next/image';
import React from 'react';

const Box = ({service}) => {
    const {title, description, img} =service
    return (
        <div className='shadow bg-lightBlue p-6 rounded-2xl flex flex-col items-center'>
            <Image src={img} height={50} width={50}></Image>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Box;