import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, CardContent, Card } from '@mui/material';
import { useParams } from 'react-router-dom';
import { fetchActivityData } from '../../Api/api';

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
        <Box sx={{ backgroundColor: '#E1F5FE', padding: '2rem' }}>
            <Box sx={{ mt: 1 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#0000FF', borderBottom: '4px solid #0000FF', display: 'inline' }}>
                    {matchedObject?.title}
                </Typography>
            </Box>
            <br />
            <Card sx={{ width: '100%', height: '400px', margin: '0 auto' }}>
                <Grid container alignItems="flex-start" spacing={2}>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        lg={6}
                        xl={6}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '1rem',
                        }}
                    >
                        <CardContent sx={{ textAlign: 'left', padding: '1rem', marginLeft: '50px', color: '#0000FF', }}>
                            <Typography variant="h4">{matchedObject?.sub_title}</Typography>
                            <br />
                            <Typography variant="body">{matchedObject?.content}</Typography>
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
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '50px',
                            marginBottom: '50px',
                            transition: 'transform 0.3s',
                            '&:hover': {
                                transform: 'scale(1.05)',

                            },
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img
                                className="responsive"
                                src={matchedObject?.photo}
                                alt=""
                                style={{ maxWidth: '500px', maxHeight: '300px', width: '100%', height: 'auto' }}
                            />
                        </div>
                    </Grid>
                    <br />
                </Grid>
            </Card>
            <br />
        </Box>
    );
};

export default Activ;
