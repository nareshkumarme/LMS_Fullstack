import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import humanizeDuration from 'humanize-duration';

import { assets } from '../../assets/assets';
import { AppContext } from '../../context/AppContext';
import Footer from '../../components/student/Footer';

const Player = () => {
  const { enrolledCourses, calculateChapterTime } = useContext(AppContext);
  const { courseId } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [openSections, setOpenSections] = useState({});
  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    const getCourseData = () => {
      const course = enrolledCourses.find((course) => course._id === courseId);
      if (course) setCourseData(course);
    };
    getCourseData();
  }, [enrolledCourses, courseId]);

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      <div className='p-4 sm:p-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:px-36'>
        {/* Left Column */}
        <div className='text-gray-800'>
          <h2 className='text-xl font-semibold'>Course Structure</h2>
          <div className='pt-5'>
            {courseData &&
              courseData.courseContent.map((chapter, index) => (
                <div key={index} className='border border-gray-300 bg-white mb-2 rounded'>
                  <div
                    className='flex items-center justify-between px-4 py-1 cursor-pointer select-none'
                    onClick={() => toggleSection(index)}
                  >
                    <div className='flex items-center gap-2'>
                      <img
                        className={`transform transition-transform ${openSections[index] ? 'rotate-180' : ''}`}
                        src={assets.down_arrow_icon}
                        alt='arrow-icon'
                      />
                      <p className='font-medium md:text-base text-sm'>{chapter.chapterTitle}</p>
                    </div>
                    <p className='text-sm md:text-default'>
                      {chapter.chapterContent.length} lectures - {calculateChapterTime(chapter)}
                    </p>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${openSections[index] ? 'max-h-60' : 'max-h-0'}`}>
                    <ul className='list-disc md:pl-7 pl-4 pr-2 py-2 text-gray-600 border-t border-gray-300'>
                      {chapter.chapterContent.map((lecture, i) => (
                        <li key={i} className='flex items-center justify-between py-1'>
                          <div className='flex items-center gap-2 w-full'>
                            <img
                              src={false ? assets.blue_tick_icon : assets.play_icon}
                              alt='play icon'
                              className='w-4 h-4 m-1'
                            />
                            <p className='text-gray-800 text-xs md:text-default flex-1'>{lecture.lectureTitle}</p>
                          </div>
                          <div className='flex items-center gap-2'>
                            {lecture.lectureUrl && (
                              <p
                                onClick={() =>
                                  setPlayerData({ ...lecture, chapter: index + 1, lecture: i + 1 })
                                }
                                className='text-blue-500 cursor-pointer whitespace-nowrap'
                              >
                                Watch
                              </p>
                            )}
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

          <div className='flex items-center gap-2 py-3 mt-10'>
            <h1 className='text-xl font-bold'>Rate the course</h1>
          </div>
        </div>

        {/* Right Column */}
        <div>
          {playerData ? (
            <div className='md:mt-10'>
              <YouTube
                videoId={playerData.lectureUrl.split('/').pop()}
                opts={{ playerVars: { autoplay: 1 } }}
                iframeClassName='w-[80%] md:w-[90%] h-[200px] md:h-[300px] mx-auto'
              />
              <div className='flex justify-between items-center mt-1'>
                <p>
                  {playerData.chapter}.{playerData.lecture} {playerData.lectureTitle}
                </p>
                <button className='text-blue-600'>{false ? 'Completed' : 'Mark Completed'}</button>
              </div>
            </div>
          ) : (
            <img src={courseData ? courseData.courseThumbnail : ''} alt='Course Thumbnail' />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Player;
