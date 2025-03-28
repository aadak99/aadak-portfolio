import Container from "@mui/material/Container"
import AppBar from "@mui/material/AppBar"
import { Link as LinkBase, Box } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Grid from '@mui/material/Grid2'
import { Link } from "react-router-dom";
import AnchorTemporaryDrawer from "./MenuDrawer";

export default function Header() {
    const linkStyle = {
        fontWeight: 'bold',
        textDecoration: 'none',
        color: 'rgba(161, 204, 165, 1)',
        textShadow: '1px 1px 2px black',
    };

    return (
        <AppBar position="static" sx={{ bgcolor: 'rgba(65, 93, 67, .75)', padding: '0px', borderRadius: '20px', height: '50px'}}>
            <Container maxWidth='lg'>
                <Grid container spacing={2} sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <Grid size={3} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignContent: 'center'
                    }}>
                        <Box sx={{ color: 'white'}}>
                        <Box 
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                        sx={{ display: { xs: 'flex', md: 'none' }, mr: 0 , padding: '5px'}}>
                        <AnchorTemporaryDrawer />  
                        </Box>
                        <LinkBase component={Link} to="/"
                        sx={{ display: { xs: 'none', md: 'flex'}, fontWeight: 'bold', textDecoration: 'none', ...linkStyle}}
                        >
                            aadak.dev
                        </LinkBase>
                        </Box>
                    </Grid>
                    <Grid size={6} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignContent: 'center'
                    }}>
                        <Box 
                            sx={{ 
                                display: { xs: 'none', md: 'flex'},
                                justifyContent: 'center',
                                alignContent: 'center',
                                gap: '2em',
                            }}>
                            

                        </Box>
                        <LinkBase component={Link} to="/"
                        sx={{ display: { xs: 'flex', md: 'none'}, fontWeight: 'bold', ...linkStyle, textDecoration: 'none'}}>
                            aadak.dev
                        </LinkBase>
                    </Grid>
                        <Grid size={3} sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingTop: '.5em',
                            gap: '1em',
                        }}>
                                <LinkBase 
                                    href="https://github.com/aadak99"
                                    target="_blank" rel="noopener"
                                    underline="none"
                                    sx={{
                                        ...linkStyle
                                    }}
                                    ><GitHubIcon sx={{ fontSize: 30 }}/></LinkBase>
                                <LinkBase 
                                    href="https://www.linkedin.com/in/aadak44/"
                                    target="_blank" rel="noopener"
                                    underline="none"
                                    sx={{
                                        ...linkStyle
                                    }}
                                    ><LinkedInIcon fontSize="large"/></LinkBase>
                        </Grid>
                    </Grid>
            </Container>
        </AppBar>
    )
};

/*
Original
                        <Link sx={{ display: { xs: 'none', md: 'flex'}, fontWeight: 'bold', textDecoration: 'none', color: '#E9C46A'}}>aadak.dev</Link>

                        <Link sx={{ color: '#E9C46A', textDecoration: 'none', fontWeight: 'medium'}}>Story</Link>
                        <Link sx={{ color: '#E9C46A', textDecoration: 'none', fontWeight: 'medium'}}>Projects</Link>
                        <Link sx={{ color: '#E9C46A', textDecoration: 'none', fontWeight: 'medium'}}>Contact</Link>

                        <LinkBase component={Link} to="/projects"
                            sx={{ display: { xs: 'none', md: 'flex'}, fontWeight: 'bold', textDecoration: 'none', ...linkStyle}}>
                                Projects
                            </LinkBase>


                        <LinkBase component={Link} to="/story"
                            sx={{ display: { xs: 'none', md: 'flex'}, fontWeight: 'bold', textDecoration: 'none', ...linkStyle}}>
                                Story
                        </LinkBase>
*/