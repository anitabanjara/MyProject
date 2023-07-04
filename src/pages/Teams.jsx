import { Box, Card, CardContent, CardMedia, Grid, Typography, Button } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
//import { Link } from 'react-router-dom';

export default function Xyz() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const heads = [
        {
            pic: "/@assets/myimg/x.jpg",
            name: "xyz",
            post: "Chairman",
        },
        {
            pic: "/@assets/myimg/y.jpg",
            name: "xyz",
            post: "Principal",
        },
        {
            pic: "/@assets/myimg/z.jpg",
            name: "xyz",
            post: "Chairman",
        },
        {
            pic: "/@assets/myimg/y.jpg",
            name: "xyz",
            post: "Vice Principal",
        },
        {
            pic: "/@assets/myimg/x.jpg",
            name: "xyz",
            post: "Teacher",
        },
        {
            pic: "/@assets/myimg/y.jpg",
            name: "xyz",
            post: "Teacher",
        },
        {
            pic: "/@assets/myimg/z.jpg",
            name: "xyz",
            post: "Teacher",
        },
        {
            pic: "/@assets/myimg/a.jpg",
            name: "xyz",
            post: "Teacher",
        },
        {
            pic: "/@assets/myimg/draw.jpg",
            name: "xyz",
            post: "Teacher",
        },
    ];

    return (
        <>
            <Box sx={{ backgroundColor: '#E1F5FE', padding: '2rem' }}>
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#0000FF', borderBottom: '4px solid #0000FF', display: 'inline' }}>
                        OUR TEAMS
                    </Typography>
                    <br />
                    <br />
                </Box>
                <Card >
                    <Grid container spacing={2}>
                        {heads.map((card, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <Card sx={{ maxWidth: 345, m: 2, p: 1, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                                    <div>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={card.pic}
                                            alt="Team Member"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {card.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {card.post}
                                            </Typography>
                                        </CardContent>
                                    </div>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Card>
            </Box>
        </>
    );
}
