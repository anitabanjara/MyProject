import {
    Box,
    Card,
    CardContent,
    Grid,
    Button,
    Typography,
    CardMedia,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

export default function Abc() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const [expanded, setExpanded] = useState(false);

    const handleToggleExpand = () => {
        setExpanded(!expanded);
    };

    const events = [
        {
            pic: "/@assets/myimg/y.jpg",
            title: "School Election",
            path: "/election",
        },
        {
            pic: "/@assets/myimg/z.jpg",
            title: "School Gardening",
            path: "/garden",
        },
        {
            pic: "/@assets/myimg/x.jpg",
            title: "Friday Program",
            path: "/friday",
        },
        {
            pic: "/@assets/myimg/draw.jpg",
            title: "Drawing Competition",
            path: "/draw",
        },
    ];

    return (
        <>
            <Box sx={{ backgroundColor: "#E1F5FE", padding: "2rem" }}>
                <Box sx={{ mt: 1 }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: "bold",
                            color: "#0000FF",
                            borderBottom: "4px solid #0000FF",
                            display: "inline",
                            marginTop: { xs: "2rem", sm: "1rem" },
                        }}
                    >
                        ABOUT US
                    </Typography>
                </Box>
                <br />
                <Card style={{ width: "75%", margin: "0 auto" }}>
                    <Grid
                        container
                        alignItems="center"
                        justifyContent="flex-end"

                    >
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
                            <CardContent sx={{ textAlign: "left", padding: "1rem" }}>
                                <Typography variant="h4"></Typography>
                                <br />

                                <Typography variant="body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                    consectetur, purus eu placerat ullamcorper, metus justo
                                    consequat tortor, vel scelerisque lorem massa non nisi. Integer
                                    vulputate finibus mauris, vitae pellentesque dolor pharetra a.
                                    Sed lacinia sapien non eleifend iaculis. In eu ullamcorper
                                    eros. Vestibulum ante ipsum primis in faucibus orci luctus et
                                    ultrices posuere cubilia curae; Mauris consequat lorem justo,
                                    eu euismod lectus finibus at. Sed vel sapien eu est aliquet
                                    tempus. Fusce malesuada libero in est faucibus, eget cursus quam
                                    suscipit. Nulla facilisi. Sed venenatis, tellus et maximus
                                    eleifend, urna metus viverra ipsum, ut aliquam arcu orci ut
                                    sapien. Sed auctor auctor arcu non rhoncus. Fusce finibus
                                    turpis ac nunc tristique tempus. Nam ultrices lacinia felis, ut
                                    faucibus mi commodo ut. Proin lacinia, tellus sed eleifend
                                    lacinia, lorem ex varius ligula, id pharetra metus risus id
                                    ipsum.
                                </Typography>
                                <br />
                                {!expanded && (
                                    <Typography variant="body" sx={{ display: "inline" }}>
                                        <Link to="/about" style={{ textDecoration: "none" }}>
                                            <Button sx={{ textTransform: "none", paddingLeft: 0 }}>
                                                Read More
                                            </Button>
                                        </Link>
                                        .....
                                    </Typography>
                                )}
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
                                height: 200,
                                transition: "transform 0.3s",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                },
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <img
                                className="responsive"
                                src="/@assets/myimg/a.jpg"
                                alt=""
                                style={{ maxWidth: "70%", height: "auto" }}
                            />
                        </Grid>
                    </Grid>
                </Card>

                <br />
                <br />
                <br />
                <br />

                <Box sx={{ mt: 1 }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: "bold",
                            color: "#0000FF",
                            borderBottom: "4px solid #0000FF",
                            display: "inline",
                            marginTop: "2rem",
                        }}
                    >
                        SCHOOL ACTIVITIES
                    </Typography>
                </Box>
                <br />
                <Box sx={{ px: { xl: 20, xs: 1 }, marginTop: "1rem" }}>
                    <Carousel
                        className="carousel"
                        showArrows={false}
                        infiniteLoop={true}
                        showThumbs={false}
                        autoPlay={true}
                        showStatus={false}
                        centerMode={true}
                        emulateTouch={true}
                        centerSlidePercentage={30}
                    >
                        {events.map((card, index) => (
                            <Link to={card.path} key={index}>
                                <Grid
                                    sx={{
                                        display: "flex",
                                        justifyContent: "left",
                                        textAlign: "left",
                                        marginTop: "1rem",
                                    }}
                                    item
                                    key={index}
                                >
                                    <Card
                                        key={index}
                                        sx={{ width: { xs: "95%", xl: "90%" }, marginBottom: 5 }}
                                    >
                                        <CardMedia
                                            sx={{ height: { xl: 200, xs: 100 } }}
                                            image={card.pic}
                                            title="green iguana"
                                        />
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h6"
                                                component="div"
                                                sx={{
                                                    color: "black",
                                                    fontWeight: "bold",
                                                    marginTop: "0.5rem",
                                                }}
                                            >
                                                {card.title}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Link>
                        ))}
                    </Carousel>

                </Box>
            </Box>
        </>
    );
}
