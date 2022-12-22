import React from 'react';
import Banner from '../../components/Banner/Banner';
import Cards from '../../components/Banner/Cards';
import Character from '../../components/Banner/Character';
import NextGame from '../../components/Banner/NextGame';
import Squad from '../../components/Banner/Squad';

const Home = () => {
   return (
      <div style={{maxWidth:"1920px", margin:"0 auto"}}>
         <Banner></Banner>
         <Cards></Cards>
         <Squad></Squad>
         <Character></Character>
         <NextGame></NextGame>
      </div>
   );
};

export default Home;