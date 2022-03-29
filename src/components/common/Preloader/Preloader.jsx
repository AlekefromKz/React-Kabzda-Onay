import React from 'react';
import loader from '../../../assets/images/loader.svg';

const Preloader = () => {
    return (
        <div style={{backgroundColor: 'white'}}>
            <img src={loader}/>
        </div>
    );
};

export default Preloader;
