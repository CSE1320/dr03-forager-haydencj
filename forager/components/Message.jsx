import React from 'react';
import {warningMessage} from '../data/development';

const Message = () => {
    return (
        <div className="message bg-[#FF5050] rounded-[20px] max-w-xs w-full text-lg text-white mx-auto px-4 py-4">
            <div className="header flex items-center">
                <img width="27px" height="27px" className="" src={warningMessage.icon}></img>
                <h1 className="uppercase font-bold px-1">{warningMessage.header}</h1>
            </div>
            <p className="">{warningMessage.message}</p>
        </div>
    );
};

export default Message;