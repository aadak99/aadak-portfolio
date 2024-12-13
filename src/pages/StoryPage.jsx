import Header from "../components/HeaderNav"
import { Box, Divider } from "@mui/material";
import Stack from '@mui/material/Stack';

export default function Story() {
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
                        color={'rgba(161, 204, 165, 1)'}
                    >
                        Story
                    </Box>
            </Stack>
        </>
    )
}