import { Box, Divider } from "@mui/material";
import Header from "../components/HeaderNav"
import Stack from '@mui/material/Stack';
import { Link as LinkBase} from "@mui/material"
import { Link } from "react-router-dom";
import LazyLoad from "../components/StoryCarousel";

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
                        <LazyLoad />
                    </Box>
                    <Box
                        display={'flex'}
                        width={'50%'}
                        height={'400px'}
                        textAlign={'left'}
                        color={'#709775'}
                        sx={{textShadow: '1px 1px 2px black', display: { xs: 'none', lg: 'block', xl: 'block' } }}
                        
                    >   
                        <div>
                            <h1>
                                <span style={{ color: '' }}>Delivering</span> Value {' '}
                                <span style={{ color: '' }}>for Your Users</span>
                            </h1>
                            
                            <p> Passionate developer focused on building secure web applications. My current stack is MERN (MongoDB, Express, React, and Node), though I am always looking to expand my knowledge base.
                                <br></br><br></br>Currently pursing a Masters in Java Software Engineering, with goals of working in the CyberSecurity field. <br></br><br></br>I currently hold certifications in Okta Professional and Administrator, with ambitions of getting Okta Developer and CompTIA Sec+ as well.
                            </p>
                            <Divider sx={{bgcolor: '#709775'}}/>

                            <h2>Explore My <LinkBase component={Link} to="/projects" sx={{textDecoration: 'none', color: 'orange'}}>Work</LinkBase></h2>
                        </div>
                    </Box>

                    <Box
                        display={'flex'}
                        width={'90%'}
                        height={'auto'}
                        textAlign={'center'}
                        color={'#709775'}
                        sx={{textShadow: '1px 1px 2px black', display: { xs: 'block', lg: 'none', xl: 'none' }, overflow: 'auto' }}
                        
                    >   
                        <div
                          
                        >
                            <h1>
                                <span style={{ color: '' }}>Delivering</span> Value {' '}
                                <span style={{ color: '' }}>for Your Users</span>
                            </h1>
                            
                            <p> Passionate developer focused on building secure web applications. My current stack is MERN (MongoDB, Express, React, and Node), though I am always looking to expand my knowledge base.
                                <br></br><br></br>Currently pursing a Masters in Java Software Engineering, with goals of working in the CyberSecurity field. <br></br><br></br>I currently hold certifications in Okta Professional and Administrator, with ambitions of getting Okta Developer and CompTIA Sec+ as well.
                            </p>
                            <Divider sx={{bgcolor: '#709775'}}/>

                            <h2>Explore My <LinkBase component={Link} to="/projects" sx={{textDecoration: 'none', color: 'orange'}}>Work</LinkBase></h2>
                        </div>
                    </Box>
            </Stack>
        </>
    )
}