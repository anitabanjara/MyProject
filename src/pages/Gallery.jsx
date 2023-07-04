import {
    Box,
    Card,
    CardMedia,
    Grid,
    Typography,

} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



export default function Gallery() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const heads = [
        {
            pic: "/@assets/myimg/x.jpg",

        },
        {
            pic: "/@assets/myimg/y.jpg",

        },
        {
            pic: "/@assets/myimg/z.jpg",

        },


    ];
    const head = [
        {
            pic: "/@assets/myimg/x.jpg",

        },
        {
            pic: "/@assets/myimg/y.jpg",

        },



    ];

    return (
        <>
            <Box sx={{ backgroundColor: '#E1F5FE', padding: '2rem' }}>
                <Card>
                    <Box sx={{ mt: 4 }}>

                        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#0000FF', borderBottom: '4px solid #0000FF', display: 'inline' }}>
                            GALLERY
                        </Typography>
                        <br />
                        <br />
                        <Card>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#0000FF', backgroundColor: '#D3D3D3', height: '70px', }}>
                                Learning
                            </Typography>
                        </Card>
                    </Box>

                    <Grid
                        sx={{
                            marginTop: "10px",
                            px: { xl: 20, xs: 2 },
                            justifyContent: "center",
                        }}
                        container
                    >
                        {heads.map((card, index) => (
                            <Grid
                                sx={{ display: "flex", justifyContent: "center" }}
                                item
                                key={index}
                                xs={12}
                                sm={6}
                                md={4}
                            >
                                <Card key={index} sx={{ width: "90%", m: 2, p: 1 }}>
                                    <div>
                                        <CardMedia
                                            sx={{
                                                height: 200,
                                                transition: 'transform 0.3s',
                                                '&:hover': {
                                                    transform: 'scale(1.05)',
                                                    borderRadius: "30%",
                                                },
                                            }}
                                            image={card.pic}
                                            title="green iguana"
                                        />

                                    </div>
                                </Card>
                            </Grid>
                        ))}
                        <Grid
                            sx={{ display: "flex", justifyContent: "center" }}
                            item
                            xs={12}
                            sm={6}
                            md={4}
                        >

                        </Grid>
                    </Grid>
                    <br /><br />

                    <div>

                    </div>

                </Card>
                <Card>
                    <Box sx={{ mt: 4 }}>
                        <Card>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#0000FF', backgroundColor: '#D3D3D3', height: '70px', }}>
                                Sports
                            </Typography>
                        </Card>

                    </Box>

                    <Grid
                        sx={{
                            marginTop: "10px",
                            px: { xl: 20, xs: 2 },
                            justifyContent: "center",
                        }}
                        container
                    >
                        {head.map((card, index) => (
                            <Grid
                                sx={{ display: "flex", justifyContent: "center" }}
                                item
                                key={index}
                                xs={12}
                                sm={6}
                                md={4}
                            >
                                <Card key={index} sx={{ width: "90%", m: 2, p: 1 }}>
                                    <div>
                                        <CardMedia
                                            sx={{
                                                height: 200,
                                                transition: 'transform 0.3s',
                                                '&:hover': {
                                                    transform: 'scale(1.05)',
                                                    borderRadius: "30%"
                                                },
                                            }}
                                            image={card.pic}
                                            title="green iguana"
                                        />

                                    </div>
                                </Card>
                            </Grid>
                        ))}
                        <Grid
                            sx={{ display: "flex", justifyContent: "center" }}
                            item
                            xs={12}
                            sm={6}
                            md={4}
                        >

                        </Grid>
                    </Grid>
                    <br /><br />

                    <div>

                    </div>

                </Card>
            </Box >
        </>
    );
}
