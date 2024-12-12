import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2'
import { Box, Button} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

 
function ResponsiveAppBar() {

  return (
    <AppBar
    sx={{
      bgcolor: 'error.main',
    }}
    >
      <Container maxWidth='lg'
      sx={{
        height: '50px',

      }}
      >
        <Toolbar disableGutters 
        sx={{
          alignItems: "center", 
          justifyContent: "center",
          color: 'white'
        }}>
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid size='grow'
            sx={{
              display: "flex",
              alignItems: 'center'
            }}>
              aadak.dev
            </Grid>
            <Grid size={6}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Button
              sx={{
                color: 'white'
              }}>Story</Button>
              <Button
              sx={{
                color: 'white'
              }}>Projects</Button>
              <Button
              sx={{
                color: 'white'
              }}>Contact</Button>
              <Link to="/">contact</Link>
            </Grid>
            <Grid size='grow'>
              <Link 
              href="https://github.com/aadak99" 
              target="_blank" rel="noopener"
              underline="none"
              sx={{
                color: 'black'
              }}
              ><GitHubIcon /></Link>
              <Link 
              href="https://www.linkedin.com/in/aadak44/" 
              target="_blank" rel="noopener"
              underline="none"
              sx={{
                color: 'black'
              }}
              ><LinkedInIcon /></Link>
            </Grid>
          </Grid>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;