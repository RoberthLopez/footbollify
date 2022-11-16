import React from 'react'
import { CarouselUi } from '../components/Carousel/CarouselUi'
import { Grupos } from '../components/Grupos/Grupos'
const HomePage = () => {
  return (
    <>
      <div style={{display:"flex", justifyContent:"center", width:"100%"}}>
        <div style={{width:"80%", justifyContent:"center"}}>
          <CarouselUi />
        </div>
      </div>
      
      <Grupos />
      
    </>
  )
}

export default HomePage