import React from 'react';

const SpecialService = () => {
    return (
        // https://image.made-in-china.com/2f0j00QSmteKdBwJzi/Building-Construction-Tools-Hot-Sell-Garden-Tool-Wheelbarrow.jpg
       <div className='px-3'>
           <h1 className='text-3xl text-center mt-3'>Our Featured Parts</h1>
            <div class="carousel " style={{height:'500px'}}>
            <div id="slide1" class="carousel-item relative w-full">
                <img src="https://www.constructiontoolwarehouse.com/media/catalog/product/cache/d4a8cc9da2ff6f28c37ab358aa8d9a13/f/a/fa871f024023a80e21bf1a6d4394650dbe698394_684A_48_22_9017.jpg" alt='' class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" class="btn btn-circle">❮</a>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
                <img src="https://www.constructiontoolwarehouse.com/media/catalog/product/cache/d4a8cc9da2ff6f28c37ab358aa8d9a13/7/9/795832961fbf34fc69688a92b3050c2c04957258_682_600211900.jpg" alt='' class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <a href="#slide3" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full">
                <img src="https://image.made-in-china.com/2f0j00QSmteKdBwJzi/Building-Construction-Tools-Hot-Sell-Garden-Tool-Wheelbarrow.jpg" alt='' class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle">❮</a>
                    <a href="#slide4" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" class="carousel-item relative w-full h-3/6">
                <img src="https://image.made-in-china.com/2f0j00QSmteKdBwJzi/Building-Construction-Tools-Hot-Sell-Garden-Tool-Wheelbarrow.jpg" alt='' class="w-full " />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" class="btn btn-circle">❮</a>
                    <a href="#slide1" class="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
       </div>
    );
};

export default SpecialService;