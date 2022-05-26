import React from 'react';

const Notfound = () => {
    const myStyle={
        backgroundImage: 
 "url('https://i.ibb.co/TTJXM7m/2456051.jpg')",
 height:'100vh',
 width:'100vh',
        marginTop:'70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div className='flex items-center'>
            <div style={myStyle}>
        
        </div>
        <div>
        <div className='not-found'>
            <h1>Oops!!</h1>

            <h1>Where are We?</h1>
            <h3>The page are you loking for is moved,renamed or</h3>
            <h2>might never been existed.</h2>

        </div>
        </div>
        </div>
    );
};

export default Notfound;