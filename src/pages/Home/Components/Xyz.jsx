import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
    Button,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

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
    ];

    return (
        <>
            <Box sx={{ backgroundColor: "#E1F5FE", padding: "2rem" }}>
                <Box sx={{ mt: 4 }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: "bold",
                            color: "#0000FF",
                            borderBottom: "4px solid #0000FF",
                            display: "inline",
                        }}
                    >
                        OUR TEAMS
                    </Typography>
                    <br />
                    <br />
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
                                            transition: "transform 0.3s",
                                            "&:hover": {
                                                transform: "scale(1.05)",
                                            },
                                        }}
                                        image={card.pic}
                                        title="green iguana"
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                            sx={{ color: "black" }}
                                        >
                                            {card.name}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ color: "black" }}
                                        >
                                            {card.post}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ color: "black" }}
                                        >
                                            {card.num}
                                        </Typography>
                                    </CardContent>
                                </div>
                            </Card>
                        </Grid>
                    ))}
                    <br /><br />
                    <Grid
                        sx={{ display: "flex", justifyContent: "center", }}
                        item
                        xs={12}
                        sm={6}
                        md={4}
                    ></Grid>
                </Grid>



                <Box sx={{ backgroundColor: 'lightgrey', padding: '2rem', display: 'flex', justifyContent: 'flex-end', marginTop: '50px' }}>

                    <Box sx={{ mt: 4 }}>

                        <Link to="/teams" style={{ textDecoration: "none" }}>
                            <Button variant="contained" color="primary" size="medium" sx={{ py: 2 }}>
                                Read More
                                .......
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
