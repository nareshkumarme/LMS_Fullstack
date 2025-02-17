import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext';
import { Navigate, useNavigate } from 'react-router-dom';
import {Line} from 'rc-progress'
import Footer from '../../components/student/Footer';


const Myenrollemts = () => {

   const [progressArray, setprogressArray] = useState([
       {lectureCompleted : 2, totalLectures:6},
       {lectureCompleted : 1, totalLectures:4},
       {lectureCompleted : 4, totalLectures:6},
       {lectureCompleted : 5, totalLectures:7},
       {lectureCompleted : 2, totalLectures:8},
       {lectureCompleted : 4, totalLectures:6},
       {lectureCompleted : 5, totalLectures:10},
       {lectureCompleted : 5, totalLectures:5}
   ])

   const {enrolledCourses,calculateCourseDuration} = useContext(AppContext)

   const navigate = useNavigate()
  return (
    <>
    <div className='md:px-36 pt-10'>
      <h1 className='text-2xl font-semibold'>My Enrollments</h1>
      <table className='md:table-auto table-fixed w-full overflow-hidden border mt-10'>
          <thead className='text-gray-900 border-b border-gray-500/20 text-sm 
          text-left max-sm:hidden'>
               <tr>
                  <th className='px-4 py-3 font-semibold trancate'>Courses</th>
                  <th className='px-4 py-3 font-semibold trancate'>Duration</th>
                  <th className='px-4 py-3 font-semibold trancate'>Completed</th>
                  <th className='px-4 py-3 font-semibold trancate'>Status</th>
               </tr>
          </thead>

          <tbody className='text-gray-700'>
               {enrolledCourses.map((course,index) => (
                  <tr key={index} className=' border-b border-gray-500/20'>
                    <td className='md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3'>
                     <img src= {course.courseThumbnail} alt='' className='w-12 sm:w-24 md:w-28' />
                     <div className='flex flex-1 flex-col'>
                      <p className='mb-1 max-sm:text-sm ml-2 mt-3'>{course.courseTitle}</p>
                      <Line
                        strokeWidth={1}
                        percent={(progressArray[index].lectureCompleted / progressArray[index].totalLectures) * 100}
                        strokeColor="#2563EB"
                        trailColor="#E5E7EB"
                        className="w-full mt-1"
                      />
                   
                    </div>
                    </td>

                    <td className='px-4 py-3 max-sm:hidden'>
                       {calculateCourseDuration(course)}
                    </td>

                    <td className='px-4 py-3 max-sm-hidden'>
                         {progressArray[index] && `${progressArray[index].lectureCompleted}/${progressArray[index].totalLectures}`} <span>Lectures</span>
                    </td>

                    <td className='px-4 py-3 max-sm:text-right'>
                       <button className='px-3 sm:px-5 py-1.5 sm:py-2 bg-blue-600 max-sm:text-xs text-white' onClick={() => navigate('/player/'+ course._id)}>
                        {progressArray[index] && progressArray[index].lectureCompleted/progressArray[index].totalLectures === 1 ? 'Completed':'On Going'}
                        </button>
                    </td>
                  </tr>
               ) )}
          </tbody>
      </table>
    </div>
    <Footer />
    </>
  )
}

export default Myenrollemts
