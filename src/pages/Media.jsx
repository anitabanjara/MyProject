import { Box, Card, CardMedia, Grid, Typography, CardContent } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { fetchGalleryData } from "../Api/api";

export default function Photos({ slug }) {
    const [galleryData, setGalleryData] = useState([]);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 900,
        });
        AOS.refresh();

        fetchGalleryData(slug)
            .then((data) => setGalleryData(data))
            .catch((error) => console.error(error));
    }, [slug]);

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
                                <div>
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                            color="#0000FF"
                                        >
                                            {card.title}
                                        </Typography>
                                    </CardContent>
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            {card.post}
                                        </Typography>
                                    </CardContent>
                                </div>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <br />
                <br />
                <Grid
                    sx={{ display: "flex", justifyContent: "center" }}
                    item
                    xs={12}
                    sm={6}
                    md={4}
                ></Grid>
            </Box>
        </>
    );
}