import Header from "../components/HeaderNav"
import { Box, Divider } from "@mui/material";
import Stack from '@mui/material/Stack';
import { Link as LinkBase} from "@mui/material"

import LazyLoad from "../components/StoryCarousel";

export default function Story() {
    return (
        <>
            <Box height={'10px'}></Box>
            <Header />
            <Stack
            direction="column"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
            height={'calc(100vh - 60px)'}
            justifyContent={'center'}
            alignItems={'center'}
            >
                
                <div>
                    <Box
                    textAlign={'center'}
                    height={'350px'}
                    width={'350px'}
                    bgcolor={'green'}
                    justifyContent={'center'}
                    alignContent={'center'}
                    >
                    
                    <LazyLoad />
                    </Box>
                
                </div>
                <div>
                <Box    
                margin={'auto'}
                        width={'50%'}
                        padding={"1em"}
                        color={'rgba(161, 204, 165, 1)'}
                    >   

                        <span>
                        <p>Hi, I’m Alex Adak. I grew up in South Florida with Turkish immigrant parents, and like many, I was expected to become a doctor. 
                            But over time, I realized my true passion was in tech. <br></br><br></br>The turning point came when I tore my ACL playing volleyball. 
                            Stuck at home recovering, I decided to dive into coding, thanks to a friend’s encouragement. 
                            I started with Harvard’s CS50, and immediately, I was hooked. After six months of self-learning, I joined Nucamp’s Bootcamp to level up. 
                            There were definitely moments of imposter syndrome and frustration, but my previous experiences helped me trust the process and keep pushing forward. 
                            <br></br><br></br>Currently, I am looking for opportunities to continue my growth as a developer. If you’d like to connect or explore potential collaborations, I would love to chat. 
                            <br></br><br></br>Let’s connect on <LinkBase 
                                    href="https://www.linkedin.com/in/aadak44/"
                                    target="_blank" rel="noopener"
                                    underline="none"
                                    >LinkedIn!</LinkBase>
                        </p>
                        </span>
                    </Box>
                </div>
            </Stack>
        </>
    )
}