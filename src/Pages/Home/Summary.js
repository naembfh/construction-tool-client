
import React from 'react';

const Summary = ({img,p,n,bgClass}) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure className='pl-5 pt-5'>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{n}</h2>
                <p>{p}</p>
                
            </div>
        </div>
    );
};

export default Summary;