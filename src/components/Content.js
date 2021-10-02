import React from 'react';
import ImageOne from '../images/goody.jpg';
import ImageTwo from '../images/goody1.jpg';

const Content = () => {
    return (
        <>
            <div className='menu-card'>
                <img src={ImageOne} alt="noodle" className="h-full rounded mb-20 shadow" />
                <div className="center-content">
                    <h2 className='text-2xl mb-2'>Noodles Joint</h2>
                    <p className="mb-2">Cripsy, delicious and nutritious</p>
                    <span>$20</span>
                </div>
            </div>
            <div className='menu-card'>
                <img src={ImageTwo} alt="noodle" className="h-full rounded mb-20 shadow" />
                <div className="center-content">
                    <h2 className='text-2xl mb-2'>Noodles Best</h2>
                    <p className="mb-2">Cripsy, delicious and nutritious</p>
                    <span>$50</span>
                </div>
            </div>
        </>
    );
};

export default Content;
