import { Box, Card, CardMedia, CircularProgress, Dialog, DialogContent, Grid, Typography, CardContent } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { fetchGalleryData } from "../Api/api";

export default function Photos() {
    const [galleryData, setGalleryData] = useState([]);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 900,
        });
        AOS.refresh();

        fetchGalleryData()
            .then((data) => setGalleryData(data))
            .catch((error) => console.error(error));
    }, []);

    const handlePhotoClick = (photo) => {
        setSelectedPhoto(photo);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedPhoto(null);
        setIsModalOpen(false);
    };

    const handleImageLoad = () => {
        setIsLoading(false);
    };

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
                                <div
                                    onClick={() => handlePhotoClick(card.cover_photo)}
                                    style={{ cursor: "pointer" }}
                                >
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
                                        onLoad={handleImageLoad}
                                    />
                                    {isLoading && (
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                top: "50%",
                                                left: "50%",
                                                transform: "translate(-50%, -50%)",
                                            }}
                                        >
                                            <CircularProgress size={40} />
                                        </Box>
                                    )}
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                            color="#0000FF"
                                        >
                                            {card.title}
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
            <Dialog open={isModalOpen} onClose={handleCloseModal}>
                <DialogContent>
                    {selectedPhoto && (
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "80vh",
                            }}
                        >
                            {isLoading ? (
                                <CircularProgress size={60} />
                            ) : (
                                <CardMedia
                                    component="img"
                                    image={selectedPhoto}
                                    alt=""
                                    style={{
                                        maxHeight: "100%",
                                        maxWidth: "100%",
                                        objectFit: "contain",
                                    }}
                                />
                            )}
                        </Box>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
}
