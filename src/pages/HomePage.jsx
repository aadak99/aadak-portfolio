import { Box, Divider } from "@mui/material";
import Header from "../components/HeaderNav"
import Stack from '@mui/material/Stack';

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
                        <h1>Building Value For Your Clients</h1>
                        
                        <p>Passionate developer dedicated to self development and creating user-centered products. I’m on a mission to turn ideas into experiences that make a difference.</p>
                        <Divider sx={{bgcolor: '#709775'}}/>
                        <h2>Explore My Work</h2>
                        <p>Check out my portfolio to see how I’ve tackled real-world challenges and brought ideas to life. Whether you’re looking for a developer who can contribute to your team or collaborate on your next project, let’s connect and build something extraordinary.</p>
                        </div>
                    </Box>
            </Stack>
        </>
    )
}