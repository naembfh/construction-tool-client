import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Summary from './Summary';
import user from '../../New folder/multiple-users-silhouette.png'
import tool from '../../New folder/settings.png'
import finish from '../../New folder/finish.png'

const Summerys = () => {
    return (
        <div className='border'>
                       <h1 className='text-3xl text-center m-3'>We Believe in Numbers.</h1>

            <div  className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
           <Summary p='Clients In asia' n='50+' bgClass="bg-gradient-to-r from-secondary to-primary" img={user} ></Summary> 
           <Summary p='Tools available variants in stock' bgClass="bg-gradient-to-r from-primary to-secondary" n='200+' img={tool} ></Summary> 
           <Summary p='Positive reviews from customer' bgClass="bg-gradient-to-r from-primary to-secondary" n='500+' img={finish} ></Summary> 
        </div>
        </div>
    );
};

export default Summerys;