import { createContext, useEffect } from "react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { dummyCourses } from "../assets/assets";
import { useState } from "react";
import humanizeDuration from 'humanize-duration'



export const AppContext = createContext();


export const AppContextProvider = (props) => {

const currency = import.meta.env.VITE_CURRENCY;
const [allCourses,setAllCourses] = useState([]);
const [isEducator,setisEducator] = useState(true);
    
//   Fetch All Courses
const fetchAllCourses = async () => {
   setAllCourses(dummyCourses)
   }
  useEffect(() => {
   fetchAllCourses()
   })

// Function to calculate average rating of course
      
const calculateRating = (course) => {
           if(course.courseRatings.length === 0){
              return 0
           }
           
           let totalRating = 0
           course.courseRatings.forEach(rating => {
              totalRating += rating.rating
           })

           return totalRating/course.courseRatings.length
      }

 // Function to calculate course chapter time
   
    const calculateChapterTime = (chapter) => {
      let time = 0;
      chapter.chapterContent.map((lecture) => time += lecture.lectureDuration)
      return humanizeDuration(time * 60*1000 , {units:["h","m"]})
    }

    //Function to Calculate Course Duration 

    const calculateCourseDuration = (course) => {

        console.log(course)
         let time = 0 ;
         // course.courseContent.map((chapter) => console.log(chapter))

         course.courseContent.map((chapter) => chapter.chapterContent.map(
            (lecture) => time += lecture.lectureDuration
         ))
         return humanizeDuration(time * 60*1000 , {units:["h","m"]})
    }

    // Function to calculate of Number of Lectures

    const calculateNoofLectures = (course) => {
      let totalLectures = 0;
      course.courseContent.forEach(chapter => {
           if(Array.isArray(chapter.courseContent)){
              totalLectures += chapter.chapterContent.length
           }
      })
      return totalLectures
    }

const value = {
      currency,allCourses,calculateRating,isEducator,setisEducator,
      calculateChapterTime,calculateCourseDuration,calculateNoofLectures
    }
     return (
        <BrowserRouter>
        <AppContext.Provider value={value}>
               {props.children}
        </AppContext.Provider>
        </BrowserRouter>
     )
}