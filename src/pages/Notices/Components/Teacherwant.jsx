import React from 'react';
import { Box, Typography, Grid, CardContent, Card } from '@mui/material';

const Notice = () => {
    return (
        <Box sx={{ backgroundColor: '#E1F5FE', padding: '2rem' }}>
            <Box sx={{ mt: 1 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#0000FF', borderBottom: '4px solid #0000FF', display: 'inline' }}>
                    Teacher Wanted
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
                            src="/@assets/myimg/a.jpg"
                            alt=""
                            style={{ maxWidth: "60%", height: "auto", marginBottom: "50px" }}
                        />
                    </Grid>
                </Grid>
            </Card>
        </Box>
    );
};

export default Notice;
