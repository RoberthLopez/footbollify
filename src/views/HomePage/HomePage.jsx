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
            <img className='homepage__teams--img' src="https://img.freepik.com/vector-premium/copa-mundial-fifa-qatar-2022-logotipo-estilizado-vector-ilustracion-aislada-futbol_633888-126.jpg?w=1060" alt="equipos"/>            
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
            <img className='homepage__teams--img' src="https://img.freepik.com/vector-gratis/monopolista-que-posee-80-ciento-participacion-mercado_3446-649.jpg?w=1060&t=st=1668750575~exp=1668751175~hmac=7bfc10cf5ffc2a8e36e2deb92473e8a597f9d6d6e03b8129dff70e48a8f11583" alt="equipos"/>        
          </div>
          <div className='homepage__compete--container'>
            <img className='homepage__teams--img' src="https://img.freepik.com/vector-gratis/ilustracion-plana-campeonato-mundial-futbol_23-2149729264.jpg?w=1060&t=st=1668752288~exp=1668752888~hmac=ea9ad1ccf9dc04181dac4978115513e77143e7002685e1b10c7e66138dd42c84" alt="equipos"/>
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