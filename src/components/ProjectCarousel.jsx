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
          bgcolor={'teal'}
          height={'400px'}
          textAlign={'center'}
          justifyContent={'center'}
          alignContent={'center'}
          borderRadius={'5px'}
          sx={{
            backgroundImage: 'url("/NucampGrounds.jpg")'
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
          bgcolor={'gray'}
          height={'400px'}
          textAlign={'center'}
          justifyContent={'center'}
          alignContent={'center'}
          borderRadius={'5px'}
          >
            <Button
            h
            sx={{
              height: '400px',
              width: '576px',
              color: 'black'
            }}
            >
              Test 2
              </Button>
          </Box>
        </div>
        <div>
        <Box
          bgcolor={'black'}
          height={'400px'}
          textAlign={'center'}
          justifyContent={'center'}
          alignContent={'center'}
          borderRadius={'5px'}
          >
            <Button
            sx={{
              height: '400px',
              width: '576px',
              color: 'red'
            }}
            >
              Test 3
              </Button>
          </Box>
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;