import React from 'react'
import { assets } from '../../assets/assets'

const Companies = () => {
  return (
    <div className='pt-8'>
      <p className='text-base text-gray-500'>Trusted by learners</p>
      <div className='flex flex-wrap items-center justify-center gap-6 md:gap-16 md:mt-5 mt-3'>
        <img src={assets.microsoft_logo} alt='Microsoft' className='w-15 md:w-28' />
        <img src={assets.walmart_logo} alt='Walmart' className='w-15 md:w-28' />
        <img src={assets.accenture_logo} alt='Accenture' className='w-15 md:w-28' />
        <img src={assets.adobe_logo} alt='Adobe' className='w-15 md:w-28' />
        <img src={assets.paypal_logo} alt='Paypal' className='w-15 md:w-28' />
      </div>
    </div>
  )
}
export default Companies
