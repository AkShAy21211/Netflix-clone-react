import React from 'react';
import Banner from '../components/Banner/Banner';
import NavBar from '../components/NavBar/NavBar';
import RowPost from '../components/RowPost/RowPost';
import Footer from '../components/Footer/Footer';
import {original,action,comedy,horror,romance} from "../url"
function Home() {

  return (
    <>
    <NavBar/>
      <Banner/>
      <RowPost title="Netflix Original" url={original}/>
      <RowPost title="Action" isSmall url={action}/>
      <RowPost title="Comedy" isSmall url={comedy}/>
      <RowPost title="Horror" isSmall url={horror}/>
      <RowPost title="Romance" isSmall url={romance}/>
      <Footer/>
    </>
  )
}

export default Home;
