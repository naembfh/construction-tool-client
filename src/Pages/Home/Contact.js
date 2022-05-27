import React from 'react';

const Contact = () => {
    return (

       <div className='my-2 py-2 border'>
            <p className='text-3xl text-center font-bold'>
          Contact Us
        </p>
            <div class="hero min-h-screen bg-white ">
                
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">
Let's chat.</h1>
            <p class="py-6">We are always connected to our clients. i's makes us understand the
client requirements clearly , for that we can deliver the best quality
things to them, We beleive that listening to our clients and make their
requiremnets full is the untimate goal for us. Feel free to contact us for
more details.
</p>
            <p class="py-6">let's make the world better together!</p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" class="input input-bordered" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Subject</span>
                </label>
                <input type="text" placeholder="Subject" class="input input-bordered" />
               
              </div>
              <textarea
          className='textarea w-full max-w-md input-bordered'
          placeholder='Your message'
          rows={6}
        ></textarea>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
       </div>



    );
};

export default Contact;