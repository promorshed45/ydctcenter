import Courses from '@/components/ui/Courses';
import Header from '@/components/ui/Header';
import Review from '@/components/ui/Review';
import Team from '@/components/ui/Team';
import Banner from '@/components/ui/banner';
import React from 'react';

const Home = () => {
  return (
    <div className='min-h-screen'>
      <Header/>
      {/* <Banner/> */}
      <Courses/>
      <Team/>
      <Review/>
    </div>
  );
};

export default Home;