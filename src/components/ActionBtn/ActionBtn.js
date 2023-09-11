import React from 'react';

const ActionBtn = ({children, clr}) => {
    return (
        <button className={`text-[#fff] text-lg font-semibold p-3 rounded-md bg-${clr}`} >{children}</button>
    );
};

export default ActionBtn;