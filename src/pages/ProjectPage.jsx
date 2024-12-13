import Header from "../components/HeaderNav"
import { Box } from "@mui/material";
import MultipleItems from "../components/ProjectCarousel";

export default function Project() {
    return (
        <>
            <Box height={'10px'}></Box>
            <Header />
            <Box
            height={'calc(100vh - 60px)'}
            justifyContent={'center'}
            alignContent={'center'}
            >
            <Box 
            height={'50%'}

            display={'flex'}
            flexDirection={'column'}
            alignContent={'center'}
            justifyContent={'center'}
            width={'50%'}
            margin={'auto'}
            >
            <MultipleItems />  
            </Box>
            </Box>
            
                 
        </>
    )
}