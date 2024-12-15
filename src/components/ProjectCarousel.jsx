import Slider from "react-slick";
import { Box, Link } from "@mui/material";
import { Button } from "@mui/material";


function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 7000,
    cssEase: "linear"
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
        <Link target="_blank" href="https://nugrounds.netlify.app/" rel="noreferrer" sx={{ bgcolor: 'red'}}>
        <Box
          height={'400px'}
          borderRadius={'5px'}
          sx={{
            backgroundImage: 'url("/NucampGrounds.jpg")',
            opacity: '.75'
          }}
          />
          </Link>
        </div>
        <div>
          <Box 
            color={'rgba(161, 204, 165, 1)'}
            textAlign={'center'}
            fontSize={'22px'}

          >
            DiveFlorida - HTML, CSS, Js
          </Box>
          <Link target="_blank" href="https://diveflorida.netlify.app/" rel="noopener" sx={{ bgcolor: 'red'}}>
            <Box
            height={'400px'}
            borderRadius={'5px'}
            sx={{
              backgroundImage: 'url("/DiveFlorida.jpg")',
              opacity: '.75'
            }}
            > 
            </Box>
          </Link>
        </div>
        <div>
        <Box 
            color={'rgba(161, 204, 165, 1)'}
            textAlign={'center'}
            fontSize={'22px'}
          >
            PlaceHolder
          </Box>
        <Link target="_blank" href="" rel="noopener" sx={{ bgcolor: 'red'}}>
        <Box
          height={'400px'}
          borderRadius={'5px'}
          sx={{
            backgroundImage: 'url("/development.jpg")',
            opacity: '.75'
          }}
          >
        </Box>
        </Link>
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;