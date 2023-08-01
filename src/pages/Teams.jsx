import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { fetchTeamsData } from '../Api/api';

export default function Teams() {
    const [teamData, setTeamData] = useState([]);
    const filePath = 'https://bhalchandraschool.edu.np/images/teams'; // Define the file path here

    useEffect(() => {
        AOS.init();
        AOS.refresh();


        fetchTeamsData()
            .then((response) => {
                // console.log('API response:', response);
                if (response && response.length > 0) {
                    setTeamData(response[0][1]);
                } else {
                    setTeamData([]);
                }
            })
            .catch((error) => {
                console.error(error);
                setTeamData([]);
            });

    }, []);

    //console.log('Team data:', teamData); // Log the team data

    return (
        <>
            <Box sx={{ backgroundColor: '#E1F5FE', padding: '2rem' }}>
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#0000FF', borderBottom: '4px solid #0000FF', display: 'inline' }}>
                        Teachers Team
                    </Typography>
                    <br />
                    <br />
                </Box>
                <Card>
                    <Grid container spacing={2}>
                        {Array.isArray(teamData) && teamData.length > 0 ? (
                            teamData.map((member) => (
                                <Grid item key={member.id} xs={12} sm={6} md={4}>
                                    <Card sx={{ maxWidth: 345, m: 2, p: 1, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                                        <div>
                                            <CardMedia component="img" height="300" src={`${filePath}/${member.photo}`} alt="" />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div" color="text.primary">
                                                    {member.name}
                                                </Typography>
                                                <Typography variant="body2" color="text.primary">
                                                    {member.post}
                                                </Typography>
                                            </CardContent>
                                        </div>
                                    </Card>
                                </Grid>
                            ))
                        ) : (
                            <Typography variant="body2">No team data available</Typography>
                        )}
                    </Grid>
                </Card>
            </Box>
        </>
    );
}
