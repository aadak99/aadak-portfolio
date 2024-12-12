import Header from "../components/HeaderNav"
import { Box, Divider } from "@mui/material";
import Stack from '@mui/material/Stack';

export default function Project() {
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
                        color={'#709775'}
                    >
                        Project
                    </Box>
            </Stack>
        </>
    )
}