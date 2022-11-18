import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'

export function CarouselUi(props)
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            image:"https://img.freepik.com/psd-premium/balon-futbol-copa-mundo-qatar-2022-ilustracion-3d_298175-138.jpg?w=1380"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            image:"https://img.freepik.com/vector-gratis/banner-sobre-tema-campeonato-mundial-qatar-2022_87202-1274.jpg?w=2000&t=st=1668615292~exp=1668615892~hmac=45a9830d1e46b2960581745074427c475bd41070f6b227f7b302a45c6481a24c"
        },
        {
            name: "Jugadores",
            description: "Jugadores de la selecciones participantes",
            image:"https://i.ytimg.com/vi/KTpVLLUfquA/maxresdefault.jpg"
        }
    ]

    return (
        <Carousel style={{width:"50%"}}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <img src={props.item.image} alt={props.item.name} style={{width: "100%", height: "45vh", objectFit:"contain"}}/>
        </Paper>
    )
}
