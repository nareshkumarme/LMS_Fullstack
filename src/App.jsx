import React from 'react';
import { Routes,Route, useMatch } from 'react-router-dom';
import Home from './pages/student/Home';
import CoursesList from './pages/student/CoursesList';
import Coursedetails from './pages/student/Coursedetails';
import Myenrollemts from './pages/student/Myenrollemts';
import Loading from './components/student/Loading';
import Player from './pages/student/Player';
import Educator from './pages/educator/Educator';
import Addcourse from './pages/educator/Addcourse';
import Mycourses from './pages/educator/Mycourses';
import StudentsEnrolled from './pages/educator/StudentsEnrolled';
import Navbar from './components/student/Navbar';
import Dashboard from './pages/educator/Dashboard'


const App = () => {

 const isEducator = useMatch('/educator/*')
    
  return (
    <div className='text-default min-h-screen bg-white'>
       {!isEducator && <Navbar />}
      <Routes>
         <Route path= "/" element={<Home />} />
         <Route path='/course-list' element ={<CoursesList />} />
         <Route path='/course-list/:input' element ={<CoursesList />} />
         <Route path='/course/:id' element ={<Coursedetails />} />
         <Route path='/my-enrollments' element ={<Myenrollemts />} />
         <Route path='/player/:courseId' element ={<Player />} />
         <Route path='/loading/:path' element ={<Loading />} />

         <Route path='/educator' element={<Educator />}>
            <Route path='educ' element ={<Dashboard />} />
            <Route path='add-course' element ={<Addcourse />} />
            <Route path='my-courses' element={<Mycourses />} />
            <Route path='student-enrolled' element={<StudentsEnrolled />} />
         </Route>
      </Routes> 
      </div>
  )
}

export default App
