import { Box, Divider } from "@mui/material";
import Header from "../components/HeaderNav"
import Stack from '@mui/material/Stack';
import { Link as LinkBase} from "@mui/material"
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <Box height={'10px'}></Box>
            <Header />
            <Stack
                direction= "row"
                spacing={2}
                height={'calc(100vh - 60px)'}
                justifyContent={'center'}
                alignItems={'center'}
                width={'100%'}
                >
                    <Box 
                        display={'flex'}
                        justifyContent={'center'}
                        alignContent={'center'}
                        width={'50%'}
                        padding={"1em"}
                        sx={{ display: { xs: 'none', lg: 'block', xl: 'block' } }}
                    >
                        <img 
                        src="/landing.jpg"
                        height={"100%"}
                        width={"100%"}
                        style={{borderRadius:'10%', transform: 'scaleX(-1)'}}
                        />
                    </Box>
                    <Box
                        display={'flex'}
                        width={'50%'}
                        textAlign={'left'}
                        color={'#709775'}
                        sx={{textShadow: '1px 1px 2px black'}}
                    >   
                        <div>
                        <h1>
                            <span style={{ color: '' }}>Delivering</span> Value {' '}
                            <span style={{ color: '' }}>for Your Users</span>
                        </h1>
                        
                        <p>Passionate developer who loves building websites that are fast, user friendly, and reliable. I have education in the MERN stack (MongoDB, Express, React, Node.js), though I am open to learning what fits your team. I am all about making technology work for people in a simple and effective manner. </p>
                        <p>Learn more <LinkBase component={Link} to="/story" sx={{textDecoration: 'none', color: 'orange'}}>here!</LinkBase></p>
                        <Divider sx={{bgcolor: '#709775'}}/>
                        <h2>Explore My <LinkBase component={Link} to="/projects" sx={{textDecoration: 'none', color: 'orange'}}>Work</LinkBase></h2>
                        <p>Check out my portfolio to see how I’ve tackled real-world challenges and brought ideas to life. Whether you’re looking for a developer who can contribute to your team or collaborate on your next project, let’s connect and build something extraordinary.</p>
                        </div>
                    </Box>
            </Stack>
        </>
    )
}