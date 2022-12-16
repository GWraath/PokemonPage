import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useEffect, useState} from 'react'
import axios from 'axios'
import PokePages from './PokePages'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


// const cards = [response];

const theme = createTheme();

export default function PokeBuilder() {
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1);
    const pokePerPage = 12;

    useEffect(()=> {
        const offset = pokePerPage * (page-1)
        // const axPok=`https://pokeapi.co/api/v2/pokemon?limit=${pokePerPage}&offset=${offset}`
        const axPok='https://jsonplaceholder.typicode.com/posts'
        console.log(axPok)
        axios.get(axPok)
        .then(response=> {console.log(response); setPosts(response.data.results)})
        .catch(error => {console.log(error)})
        },[page])


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {posts.map((post, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1+(page*pokePerPage-12)}.png`}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" className='capitalise'>
                      {post.name}
                    </Typography>
                    <Typography>
                      This is a list of Pokemon
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href={"/description/"+(index+1+(page*pokePerPage-12))}>View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
        <PokePages pageHandler={setPage}/>
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Choose a page to explore more!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}