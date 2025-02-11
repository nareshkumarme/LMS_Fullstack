import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import Loading from '../../components/student/Loading';
import { assets } from '../../assets/assets';
import humanizeDuration from 'humanize-duration';
import Footer from '../../components/student/Footer';
import Youtube from 'react-youtube';

const CourseDetails = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [openSections, setOpenSections] = useState({});
  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false);
  const [playerData, setPlayerData] = useState(null);

  const {
    currency,
    allCourses,
    calculateRating,
    calculateChapterTime,
    calculateCourseDuration,
    calculateNoofLectures,
  } = useContext(AppContext);

  useEffect(() => {
    const findCourse = allCourses.find(course => course._id === id);
    setCourseData(findCourse);
  }, [allCourses, id]);

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return courseData ? (
    <>
      <div className='flex flex-row gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left'>
        <div className='absolute top-0 left-0 w-full h-[500px] -z-1 bg-gradient-to-b from-cyan-100/70'></div>

        {/* Left Column */}
        <div className='max-w-xl z-10 text-gray-500'>
          <h1 className='md:text-[36px] text-[26px] font-semibold text-gray-800'>
            {courseData.courseTitle}
          </h1>
          <p className='pt-4 md:text-base text-sm' 
            dangerouslySetInnerHTML={{ __html: courseData.courseDescription.slice(0, 200) }}>
          </p>

          {/* Review and Rating */}
          <div className='flex flex-row items-center space-x-2 pt-3 pb-1 text-sm'>
            <p>{calculateRating(courseData)}</p>
            <div className='flex flex-row'>
              {[...Array(5)].map((_, i) => (
                <img className='w-3.5 h-3.5' key={i} 
                  src={i < Math.floor(calculateRating(courseData)) ? assets.star : assets.star_blank} 
                  alt='star' 
                />
              ))}
            </div>
            <p className='text-gray-500'>
              ({courseData.courseRatings.length} {courseData.courseRatings.length > 1 ? 'ratings' : 'rating'})
            </p>
            <p>{courseData.enrolledStudents.length} {courseData.enrolledStudents.length > 1 ? 'students' : 'student'}</p>
            <p className='text-sm'>Course by <span className='text-blue-600 underline'>GreatStack</span></p>
          </div>

          {/* Course Structure */}
          <div className='pt-8 text-gray-800'>
            <h2 className='text-xl font-semibold'>Course Structure</h2>
            <div className='pt-5'>
              {courseData.courseContent.map((chapter, index) => (
                <div key={index} className='border border-gray-300 bg-white mb-2 rounded'>
                  <div className='flex items-center justify-between px-4 py-1 cursor-pointer select-none' onClick={() => toggleSection(index)}>
                    <div className='flex items-center gap-2'>
                      <img className={`transform transition-transform ${openSections[index] ? 'rotate-180':''}`} src={assets.down_arrow_icon} alt='arrow-icon' />
                      <p className='font-medium md:text-base text-sm'>{chapter.chapterTitle}</p>
                    </div>
                    <p className='text-sm md:text-default'>{chapter.chapterContent.length} lectures - {calculateChapterTime(chapter)}</p>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${openSections[index] ? 'max-h-60' : 'max-h-0'}`}>
                    <ul className='list-disc md:pl-7 pl-4 pr-2 py-2 text-gray-600 border-t border-gray-300'>
                      {chapter.chapterContent.map((lecture, i) => (
                        <li key={i} className='flex items-center justify-between py-1'>
                          <div className='flex items-center gap-2 w-full'>
                            <img src={assets.play_icon} alt='play icon' className='w-4 h-4 m-1' />
                            <p className='text-gray-800 text-xs md:text-default flex-1'>{lecture.lectureTitle}</p>
                          </div>
                          <div className='flex items-center gap-2'>
                            {lecture.isPreviewFree && <p onClick={() => setPlayerData({ videoId: lecture.lectureUrl.split('/').pop() })} className='text-blue-500 cursor-pointer whitespace-nowrap'>Preview</p>}
                            <p className='text-gray-600 text-xs md:text-default whitespace-nowrap'>
                              {humanizeDuration(lecture.lectureDuration * 60 * 1000, { units: ['h', 'm'] })}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className='max-w-[420px] z-10 shadow-lg rounded-t bg-white min-w-[300px] sm:min-w-[420px] overflow-hidden'>
          {playerData ? <Youtube videoId={playerData.videoId} opts={{ playerVars: { autoplay: 1 } }} iframeClassName='w-full aspect-video' /> : <img src={courseData.courseThumbnail} alt='' />}
          <div className='p-5'>
            <button className='mt-4 w-full py-3 rounded bg-blue-600 text-white font-medium'>
              {isAlreadyEnrolled ? 'Already Enrolled' : 'Enroll Now'}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : <Loading />;
};

export default CourseDetails;
