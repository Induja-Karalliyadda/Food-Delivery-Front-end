import { useState } from 'react'
import Header from '../../Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import './Home.css'

function Home() {
  const [category,setCategory]= useState("All");
  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home