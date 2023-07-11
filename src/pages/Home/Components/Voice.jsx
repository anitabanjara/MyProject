import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { fetchVoiceData } from '../../../Api/api';

const Voice = () => {
    const [voiceData, setVoiceData] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 900,
        });
        AOS.refresh();

        fetchVoiceData()
            .then((data) => setVoiceData(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <>
            <Box sx={{ backgroundColor: '#E1F5FE', padding: '2rem' }}>
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#0000FF', borderBottom: '4px solid #0000FF', display: 'inline' }}>
                        VOICE
                    </Typography>
                    <br />
                    <br />
                </Box>

                <Grid spacing={5} container sx={{ px: { xl: 35, xs: 5 }, marginTop: 1, marginBottom: 8 }}>
                    <Grid item xs={12} xl={6} style={{ overflow: 'hidden' }}>
                        <Link to={`/about/${voiceData?.principalSlug}`}>
                            <div data-aos="fade-right" className="image-with-text-container" style={{ overflow: 'hidden', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <img src={voiceData?.principalImage} alt="img" style={{ width: '90%', height: '88%' }} />
                                <Typography variant="h6" component="div" sx={{ color: 'Black', fontWeight: 'bold' }}>
                                    Message from the Principal
                                </Typography>
                            </div>
                        </Link>
                    </Grid>
                    <Grid item xs={12} xl={6} style={{ overflow: 'hidden' }}>
                        <Link to={`/about/${voiceData?.chairSlug}`}>
                            <div data-aos="fade-left" className="image-with-text-container" style={{ overflow: 'hidden', width: '90%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <img src={voiceData?.chairImage} alt="img" style={{ width: '100%', height: 'auto' }} />
                                <Typography variant="h6" component="div" sx={{ color: 'Black', fontWeight: 'bold' }}>
                                    Message from the SMC Chair
                                </Typography>
                            </div>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Voice;
