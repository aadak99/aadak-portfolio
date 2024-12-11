import { Box, Container, Divider } from "@mui/material";
import Header from "../components/HeaderNav"
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div>
            <Header />
            <Stack
                direction= "row"
                spacing={2}
                height={'calc(100vh - 60px)'}
                divider={<Divider orientation="vertical" flexItem />}
                justifyContent={'center'}
                alignItems={'center'}
                width={'100%'}
                >
                    <Box 
                        display={'flex'}
                        justifyContent={'center'}
                        alignContent={'center'}
                        width={'50%'}>
                            </Box>
                    <Box
                        display={'flex'}
                        bgcolor={'red'}
                        justifyContent={'center'}
                        alignContent={'center'}
                        width={'50%'}>
                            Test</Box>
            </Stack>
            
        </div>
    )
}