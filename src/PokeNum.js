import React from 'react'
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'
import Button from '@mui/material/Button';

export const PokeNum = () => {
    const params = useParams();
    const pokemon = params.pokenum
    // state and useeffect

    const [poke, setPoke] = useState([]);
    

    useEffect(()=> {
        console.log('fetching pokemon')
        axios.get('https://pokeapi.co/api/v2/pokemon/'+pokemon)
        .then(response=> {console.log(response); setPoke(response.data);})
        .catch(error => {console.log(error)})
        },[pokemon])

        const Weight = <div>Weight: {poke.weight}kg</div>
        const Height = <div>Height: {(poke.height)/10}m</div>

        const [isWeightHidden, setWeightHidden] = useState(false);

        const hiddenWeight = () => {
            setWeightHidden(!isWeightHidden);
        }

        const [isHeightHidden, setHeightHidden] = useState(false);

        const hiddenHeight = () => {
            setHeightHidden(!isHeightHidden);
        }
    return (
        <div className="pokemon">
            {poke.name ?
            <>
            <h3> Pokemon #{pokemon}</h3>
            <img alt='poke' width={400} height={400}  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon}.png`}></img>
            <div className='capitalise'>Name: {poke.name}</div>
            {poke.types.map((type, i) => <div key={i} className='capitalise'>Type {i+1}: {type.type.name}</div>)}
            <div><Button variant="contained" onClick={hiddenWeight}>{isWeightHidden? 'Show Weight':'Hide Weight'}</Button></div> 
            {!isWeightHidden ? Weight : null}
            <div><Button variant="contained" onClick={hiddenHeight}>{isHeightHidden? 'Show Height':'Hide Height'}</Button></div> 
            {!isHeightHidden ? Height : null}
            </>
            : <p> pokemon {pokemon} not found</p>
            }
        </div>              
    )
}