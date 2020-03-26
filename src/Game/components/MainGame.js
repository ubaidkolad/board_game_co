import React,{useState} from 'react'
import ObjectCard from './ObjectCard/ObjectCard'

export default function MainGame() {
    
    const [activeCards,setActiveCards]  = useState([])

    
    return (
        <>
        <h1>Room Info</h1>
        <h1>Room Card</h1>
        <ObjectCard></ObjectCard>
        </>
    )
}
