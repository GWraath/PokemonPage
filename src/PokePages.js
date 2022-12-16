import React from 'react'
import Button from '@mui/material/Button';

export default function PokePages(props) {
        let pages = [];
    for (let i = 0; i<10; i++) {
        pages.push(<Button variant="outlined" key={i} onClick={()=>props.pageHandler(i+1)} >{i+1}</Button>)
    } return pages
    }