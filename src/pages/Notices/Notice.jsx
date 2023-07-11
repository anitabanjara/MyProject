import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, CardContent, Card } from '@mui/material';
import { useParams } from 'react-router-dom';
import { fetchNoticeData } from '../../Api/api';

const Notice = () => {
    const { id } = useParams();
    const [noticeData, setNoticeData] = useState(null);

    useEffect(() => {
        fetchNoticeData()
            .then((data) => setNoticeData(data))
            .catch((error) => console.error(error));
    }, []);

    if (!noticeData) {
        return <Typography>Loading...</Typography>;
    }

    const matchedObject = noticeData.find((item) => item.id === parseInt(id));

    console.log(matchedObject);

    if (!matchedObject) {
        return <Typography>Notice not found.</Typography>;
    }

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
                                style={{ width: '350px', height: 'auto' }}
                            />
                        </div>
                    </Grid>
                </Grid>
            </Card>
            <br />
        </Box>
    );
};

export default Notice;
