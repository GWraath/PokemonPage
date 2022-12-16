import React from 'react'
import {NavLink} from 'react-router-dom'
import { AppBar } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography';

const Navbar=()=> {
  return (
    <>
     <AppBar position="sticky" className='AppBar' >
        <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/builder'> PokeBuilder </NavLink>
            </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar