import {
    Box,
    Card,
    CardMedia,
    Grid,
    Typography,
    Button,
    CardContent
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchGalleryData } from "../../../Api/api";

export default function Photos() {
    const [galleryData, setGalleryData] = useState([]);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 900,
        });
        AOS.refresh();

        fetchGalleryData()
            .then((data) => setGalleryData(data.slice(0, 5))) // Show only the first 5 images
            .catch((error) => console.error(error));
    }, []);





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
                        GALLERY
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
                    {galleryData?.map((card, index) => (
                        <Grid
                            sx={{ display: "flex", justifyContent: "center" }}
                            item
                            key={index}
                            xs={12}
                            sm={6}
                            md={4}
                        >
                            <Card sx={{ width: "90%", m: 2, p: 1 }}>
                                <Link to={`/media`} style={{ textDecoration: "none" }}>
                                    <div data-aos="flip-up">
                                        <CardMedia
                                            sx={{
                                                height: 200,
                                                transition: "transform 0.3s",
                                                "&:hover": {
                                                    transform: "scale(1.05)",
                                                },
                                            }}
                                            component="img"
                                            height="200"
                                            image={card.cover_photo}
                                            alt=""
                                            title="green iguana"
                                        />

                                    </div>
                                </Link>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <br /><br />
                <Grid
                    sx={{ display: "flex", justifyContent: "center" }}
                    item
                    xs={12}
                    sm={6}
                    md={4}
                ></Grid>

                <Box sx={{ backgroundColor: 'lightgrey', padding: '2rem', display: 'flex', justifyContent: 'flex-end', marginTop: '50px' }}>
                    <Box sx={{ mt: 4 }}>
                        <Link to={`/media`} style={{ textDecoration: "none" }}>
                            <Button variant="contained" color="primary" size="medium" sx={{ py: 2 }}>
                                Read More
                                .......
                            </Button>
                        </Link>
                        <br />
                        <br />
                    </Box>
                </Box>
            </Box>
        </>
    );
}
