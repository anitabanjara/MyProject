import React from 'react';
import { Box, Typography, Grid, CardContent, Card } from '@mui/material';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
const About = () => {
  const location = useLocation();
  const [aboutData, setAboutData] = useState();
  useEffect(() => {
    axios
      .get("https://bhalchandraschool.edu.np/api/aboutUs")
      .then(response => setAboutData(response.data.data))
      .catch(error => console.error(error));
  }, []);
  const extractedPart = location.pathname.substring(location.pathname.indexOf("/about/") + "/about/".length);
  const matchedObject = aboutData?.find(item => item.slug === extractedPart);

  console.log(matchedObject)
  function convertHtmlToText(htmlString) {
    const parser = new DOMParser();
    const parsedDoc = parser.parseFromString(htmlString, 'text/html');
    return parsedDoc.body.textContent;
  }
  const normalText = convertHtmlToText(matchedObject?.excerpt);
  return (
    <Box sx={{ backgroundColor: '#E1F5FE', padding: '2rem' }}>
      <Box sx={{ mt: 1 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#0000FF', borderBottom: '4px solid #0000FF', display: 'inline' }}>
          {matchedObject?.title}
        </Typography>
      </Box>
      <br />
      <Card>
        <Grid container alignItems="flex-start" spacing={2}>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem",
            }}
          >
            <CardContent sx={{ textAlign: "left", padding: "1rem", marginLeft: "50px" }}>
              <Typography variant="h4"></Typography>
              <br />

              <Typography variant="body">
                {normalText}
              </Typography>
              <br />
            </CardContent>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "50px",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <img
              className="responsive"
              src={matchedObject?.photo}
              alt=""
              style={{ maxWidth: "60%", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default About;
