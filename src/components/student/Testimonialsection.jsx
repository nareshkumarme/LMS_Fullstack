import React from 'react';
import { dummyTestimonial, assets } from '../../assets/assets';

const Testimonialsection = () => {
  return (
    <div className='pb-14 px-4 md:px-0 md:mt-2'>
      <h1 className='text-2xl sm:text-3xl font-medium text-gray-800 text-center'>Testimonials</h1>
      <p className='text-sm sm:text-base text-gray-500 mt-3 text-center'>
        Hear from our learners as they share their journey of transformation, success, and how our 
        <br className="hidden md:block" /> platform has made a difference in their lives.
      </p>
    {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 md:mx-20 mx-4">
        {dummyTestimonial.map((testimonial, index) => (
          <div 
            key={index} 
            className='text-sm text-left border border-gray-500/30 pb-4 rounded-lg bg-white shadow-lg overflow-hidden'
          >
            <div className='flex items-center gap-4 px-5 py-4 bg-gray-100'>
              <img className='h-12 w-12 rounded-full' src={testimonial.image} alt={testimonial.name} />
              <div>
                <h1 className='text-lg font-medium text-gray-800'>{testimonial.name}</h1>
                <p className='text-gray-700'>{testimonial.role}</p>
              </div>
            </div>
             <div className='p-5 pb-6'>
              <div className='flex gap-0.5'>
                {[...Array(5)].map((_, i) => (
                  <img 
                    className='h-5' 
                    key={i} 
                    src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank} 
                    alt='star' 
                  />
                ))}
              </div>
              <p className='text-gray-500 mt-4'>{testimonial.feedback}</p>
            </div>
            <a href='#' className='text-blue-500 underline px-5'>Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Testimonialsection;
