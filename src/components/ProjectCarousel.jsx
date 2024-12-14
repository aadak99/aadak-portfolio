import Slider from "react-slick";
import { Box } from "@mui/material";
import { Button } from "@mui/material";


function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div >
          <Box 
            color={'rgba(161, 204, 165, 1)'}
            textAlign={'center'}
            fontSize={'22px'}
          >
            Nucamp Grounds - Reactjs
          </Box>
        <Box
          bgcolor={'teal'}
          height={'400px'}
          textAlign={'center'}
          justifyContent={'center'}
          alignContent={'center'}
          borderRadius={'5px'}
          sx={{
            backgroundImage: 'url("/NucampGrounds.jpg")',
            opacity: '.75'
          }}
          >
            <Button
            sx={{
              height: '400px',
              width: '576px'
            }}
            >

              </Button>
          </Box>
        </div>
        <div>
          <Box 
            color={'rgba(161, 204, 165, 1)'}
            textAlign={'center'}
            fontSize={'22px'}
            
          >
            Nucamp Grounds - React Native
          </Box>
          <Box
          bgcolor={'gray'}
          height={'400px'}
          textAlign={'center'}
          justifyContent={'center'}
          alignContent={'center'}
          borderRadius={'5px'}
          sx={{
            backgroundImage: 'url("/development.jpg")',
            opacity: '.75'
          }}
          >
            <Button
            h
            sx={{
              height: '400px',
              width: '576px',
              color: 'black'
            }}
            >
              
              </Button>
          </Box>
        </div>
        <div>
        <Box 
            color={'rgba(161, 204, 165, 1)'}
            textAlign={'center'}
            fontSize={'22px'}
          >
            Dive Florida
          </Box>
        <Box
          bgcolor={'black'}
          height={'400px'}
          textAlign={'center'}
          justifyContent={'center'}
          alignContent={'center'}
          borderRadius={'5px'}
          sx={{
            backgroundImage: 'url("/development.jpg")',
            opacity: '.75'
          }}
          >
            
            <Button
            sx={{
              height: '400px',
              width: '576px',
              color: 'red'
            }}
            >
              
              </Button>
          </Box>
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;