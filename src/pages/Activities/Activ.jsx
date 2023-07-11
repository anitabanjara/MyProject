import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchActivityData } from '../../Api/api';
import { Box, Typography, Card, Grid, CardContent } from '@material-ui/core';

const Activ = () => {
    const { id } = useParams();
    const [activityData, setActivityData] = useState([]);

    useEffect(() => {
        fetchActivityData()
            .then((data) => setActivityData(data))
            .catch((error) => console.error(error));
    }, []);

    const matchedObject = activityData.find((item) => item.slug === id);

    return (
        <>
            <Card>
                <Box sx={{ backgroundColor: '#E1F5FE', padding: '2rem' }}>
                    <Box sx={{ mt: 1 }}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'lightBlue', borderBottom: '4px solid #0000FF', display: 'inline' }}>
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
                                    <Typography variant="h4">  {matchedObject?.sub_title}</Typography>
                                    <br />
                                    <Typography variant="body" >
                                        What is Lorem Ipsum?
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <img
                                        className="responsive"
                                        src={matchedObject?.photo}
                                        alt=""
                                        style={{ width: "350px", height: "auto" }}
                                    />
                                </div>


                            </Grid>
                        </Grid>
                    </Card>
                </Box>
            </Card>
        </>
    );
};

export default Activ;
