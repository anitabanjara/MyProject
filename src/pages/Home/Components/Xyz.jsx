import { Box, Card, CardContent, CardMedia, Grid, Typography, Button } from "@mui/material";
import React, { useState, useEffect } from 'react';
import AOS from "aos";
import { Link } from 'react-router-dom';
import "aos/dist/aos.css";
import { fetchTeamsData } from "../../../Api/api";

export default function Teams() {
    const [teamData, setTeamData] = useState([]);

    useEffect(() => {
        AOS.init();
        AOS.refresh();

        fetchTeamsData()
            .then((data) => setTeamData(data ? [data] : []))
            .catch((error) => console.error(error));

    }, []);

    //console.log(teamData);

    return (
        <>
            <Box sx={{ backgroundColor: '#E1F5FE', padding: '2rem' }}>
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#0000FF', borderBottom: '4px solid #0000FF', display: 'inline' }}>
                        Teams
                    </Typography>
                    <br />

                    <br />
                </Box>
                <Card>
                    <Grid container spacing={2}>
                        {Array.isArray(teamData) && teamData.length > 0 ? (
                            teamData.map((member) => (
                                <Grid item key={member.id} xs={12} sm={6} md={4}>

                                    <Card sx={{ maxWidth: 350, m: 2, p: 1, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                                        <div>
                                            <CardMedia
                                                component="img"
                                                height="250"
                                                image={member.photo}
                                                alt=""

                                            />
                                            <CardContent>

                                                <Typography gutterBottom variant="h5" component="div" color='#3b4147'>
                                                    {member.name}
                                                </Typography>
                                                <Typography variant="h5" color="text.secondary">
                                                    {member.post}
                                                </Typography>


                                            </CardContent>
                                        </div>
                                    </Card>
                                </Grid>
                            ))
                        ) : (
                            <Typography variant="h5">No team data available</Typography>
                        )}
                    </Grid>
                </Card>



                <Box sx={{ backgroundColor: 'lightgrey', padding: '2rem', display: 'flex', justifyContent: 'flex-end', marginTop: '50px' }}>
                    <Box sx={{ mt: 4 }}>
                        <Link to="/teams" style={{ textDecoration: "none" }}>
                            <Button variant="contained" color="primary" size="medium" sx={{ py: 2 }}>
                                <Link to="/teams" style={{ textDecoration: "none", color: "#FFFFFF" }}>
                                    Read More
                                    .......
                                </Link>
                            </Button>
                        </Link>
                        <br />
                        <br />
                    </Box>
                </Box>
            </Box >
        </>
    );
}
