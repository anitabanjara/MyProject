import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

import { fetchTeamsData } from "../Api/api";

export default function Teams() {
    const [teamData, setTeamData] = useState([]);

    useEffect(() => {
        AOS.init();
        AOS.refresh();

        fetchTeamsData()
            .then((data) => setTeamData(data ? [data] : []))
            .catch((error) => console.error(error));

    }, []);

    console.log(teamData);

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
                                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#0000FF', borderBottom: '4px solid #0000FF', display: 'inline', }}>
                                        {member.committee_title}
                                    </Typography>
                                    <Card sx={{ maxWidth: 345, m: 2, p: 1, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                                        <div>
                                            <CardMedia
                                                component="img"
                                                height="200"
                                                image={member.photo}
                                                alt=""
                                            />
                                            <CardContent>

                                                <Typography gutterBottom variant="h5" component="div" color='#0000FF'>
                                                    {member.name}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {member.post}
                                                </Typography>

                                                <Typography variant="body2" color="text.secondary">
                                                    Email: {member.email}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Phone: {member.phone}
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
            </Box >
        </>
    );
}
