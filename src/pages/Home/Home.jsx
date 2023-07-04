import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import './styles.css';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Abc from "./Components/Abc";
import Voice from "./Components/Voice";
import Xyz from "./Components/Xyz";
import Photos from "./Components/photos";
import axios from "axios";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Home() {


  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 900,
    });

    // Fetch API data using Axios
    axios
      .get("https://bhalchandraschool.edu.np/api/sliders")
      // .then((response) =>
      //   console.log("response", response));
      .then(response => setCarouselData(response.data.data))
      .catch(error => console.error(error));
  }, []);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));


  return (
    <>
      <Grid>
        <Carousel
          className="carousel"
          showArrows={true}
          showThumbs={false}
          swipeable={true}
          infiniteLoop={true}
          dynamicHeight={true}
          autoPlay={true}
          style={{
            marginRight: isMobile ? "20px" : "0",
            height: "800px",
          }}
        >
          {carouselData.map(item => (
            <div key={item.id}>
              <img
                src={item.photo}
                alt={item.title}
                className="carousel-image"
              />
              <div className="image-overlay">
                <h1 className="image-text">{item.title}</h1>
              </div>
            </div>
          ))}

        </Carousel>

        <Abc />
        <Voice />
        <Xyz />
        <Photos />
      </Grid>
    </>
  );
}
