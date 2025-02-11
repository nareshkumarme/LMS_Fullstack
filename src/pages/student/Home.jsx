import React from 'react';
import Hero from '../../components/student/Hero';
import Companies from '../../components/student/Companies';
import Coursedetails from './Coursedetails';
import Coursesection from '../../components/student/Coursesection';
import Testimonialsection from '../../components/student/Testimonialsection';
import CalltoAction from '../../components/student/CalltoAction';
import Footer from '../../components/student/Footer';
// import Coursesection from '../../components/student/Coursesection';

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
     <Hero />
     <Companies />
     <Coursesection />
     <Testimonialsection />
     <CalltoAction />
     <Footer />
    </div>
  )
}

export default Home
