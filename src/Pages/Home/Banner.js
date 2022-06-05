import React from 'react';
import '../Home/Banner.css'
const Banner = () => {
    // style="background-image: url(https://api.lorem.space/image/fashion?w=1000&h=800);"
    return (
        <div class="hero min-h-screen"  style={{ 
            backgroundImage: `url("https://i.ibb.co/TWqsbmn/37632.jpg")` 
          }} >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-black">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Delivering a Better
Tomorrow!</h1>
            <p class="mb-5 font-bold">Construction tool is a manufacturer organization where we provide the best construction
tools around the whole world. we beleive and focus on quality and performance
also we love to inevent new technology and share our work to the world.
.</p>
            <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary font-bold text-black">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;