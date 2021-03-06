import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';

const Home = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <MakeAppointment></MakeAppointment>
      <Footer></Footer>
    </div>
  );
};

export default Home;