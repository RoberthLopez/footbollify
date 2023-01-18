import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'
const HomePage = () => {
  return (
    <>
      <div className='homepage__container'>
          <div className='homepage__team--container'>
            <div className='homepage__title--container'>
              <h1 className='homepage__title'>¿Estas listo para experimentar la fiebre del mundial?</h1>
              <Link to={"/register"}>
                <button className='register__button'>Registrate YA</button>
              </Link>
            </div>
            <img className='homepage__teams--img' src="https://i.ibb.co/cbSndhW/copa-mundial-fifa-qatar-2022-logotipo-estilizado-vector-ilustracion-aislada-futbol-633888-126.jpg" alt="equipos"/>            
          </div>
          <div className='homepage__compete--container'>
            <img className='homepage__teams--img' src="https://pbs.twimg.com/media/FVPPIJxXoAE0elF?format=png&name=large" alt="equipos"/>
            <div className='homepage__text--container'>
              <h2 className='homepage__text--title'>¡Vota por tu equipo favorito!</h2>
              <p className='homepage__text--size'>
                Elige en cada partido un equipo y desmuestra todo lo que sabes de fútbol.
              </p>
            </div>
          </div>
          <div className='homepage__team--container'>
            <div className='homepage__text--container2'>
              <h2 className='homepage__text--title2'>¡Compite con tus amigos!</h2>
              <p className='homepage__text--size'>
                Cuando aciertas sumas puntos. Obten los primeros lugares del ranking para presumirlo con tus amigos. 
              </p>
            </div>  
            <img className='homepage__teams--img' src="https://i.ibb.co/Dg4Cv55/monopolista-que-posee-80-ciento-participacion-mercado-3446-649.jpg" alt="equipos"/>        
          </div>
          <div className='homepage__compete--container'>
            <img className='homepage__teams--img' src="https://i.ibb.co/bvM1X3Y/ilustracion-plana-campeonato-mundial-futbol-23-2149729264.jpg" alt="equipos"/>
            <div className='homepage__text--container'>
              <h2 className='homepage__text--title'>¡Sigue con nosotros cada partido y no te pierdas ni un solo gol!</h2>
              <p className='homepage__text--size'>
                En nuestra plataforma puedes ver las fechas y horarios de cada uno de los juegos.
              </p>
            </div>
          </div>
      </div>
      
    </>
  )
}

export default HomePage