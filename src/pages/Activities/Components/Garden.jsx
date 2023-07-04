import React from 'react';
import { Box, Typography, Grid, CardContent, Card } from '@mui/material';

const Draw = () => {
    return (
        <Box sx={{ backgroundColor: '#E1F5FE', padding: '2rem' }}>
            <Box sx={{ mt: 1 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#0000FF', borderBottom: '4px solid #0000FF', display: 'inline' }}>
                    School Gardening
                </Typography>
            </Box>
            <br />
            <Card sx={{ height: "50vh" }}>
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                consectetur, purus eu placerat ullamcorper, metus justo
                                consequat tortor, vel scelerisque lorem massa non nisi. Integer
                                vulputate finibus mauris, vitae pellentesque dolor pharetra a.
                                Sed lacinia sapien non eleifend iaculis. In eu ullamcorper
                                eros.

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
                            src="/@assets/myimg/z.jpg"
                            alt=""
                            style={{
                                maxWidth: "50%", height: "auto"
                            }}
                        />
                    </Grid>
                </Grid>
            </Card>
        </Box>
    );
};

export default Draw;
