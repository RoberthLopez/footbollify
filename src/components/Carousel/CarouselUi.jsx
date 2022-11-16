import React, {Fragment} from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

export function CarouselUi(props)
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            image:"https://img.freepik.com/vector-gratis/plantilla-plana-mesa-grupos-campeonato-futbol_23-2149686665.jpg?w=1800&t=st=1668613746~exp=1668614346~hmac=61e7ad64ff0cebe18b761366edccd8e4deeabf339a5e4340ea889e83cb763229"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            image:"https://img.freepik.com/vector-gratis/banner-sobre-tema-campeonato-mundial-qatar-2022_87202-1274.jpg?w=2000&t=st=1668615292~exp=1668615892~hmac=45a9830d1e46b2960581745074427c475bd41070f6b227f7b302a45c6481a24c"
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
