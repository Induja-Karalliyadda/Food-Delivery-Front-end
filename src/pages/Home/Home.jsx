import { useState } from 'react'
import Header from '../../Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import './Home.css'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownloard from '../../components/AppDownloard/AppDownloard';

function Home() {
  const [category,setCategory]= useState("All");
  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <AppDownloard/>
    </div>
  )
}

export default Home