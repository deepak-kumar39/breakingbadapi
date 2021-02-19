import React from 'react'
import CharacterItem from "../characters/CharacterItem";
const CharacterGrid = (props) => {
    return props.isLoading ? (<h1>Loading...</h1>) : (<section className="cards">
        {props.items.map(item=>(
            <CharacterItem key={item.char_id} item= {item}></CharacterItem>
        ))}
    </section>)
    
}

export default CharacterGrid
