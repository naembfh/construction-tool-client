import React from 'react';
import '../Home/Banner.css'
const Banner = () => {
    return (
         <div className="container">
             <div className=' h-screen' style={{ 
            backgroundImage: `url("https://i.ibb.co/TWqsbmn/37632.jpg")` ,
            backgroundSize:'cover'
          }}>
            
          </div>
          <div className='text-block'>
          <h4>Nature</h4>
    <p>What a beautiful sunrise</p>
  </div>
         </div>
    );
};

export default Banner;