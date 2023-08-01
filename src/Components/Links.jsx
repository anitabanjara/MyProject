import { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import TwitterIcon from "@mui/icons-material/Twitter";
import { fetchLinkData } from "../Api/api";
import { fetchSiteData } from '../Api/api';

export default function Links() {

    const [showAll, setShowAll] = useState(false);
    const [linksData, setLinksData] = useState([]);
    const [siteData, setSiteData] = useState([]);

    useEffect(() => {
        fetchLinkData()
            .then((data) => setLinksData(data))
            .catch((error) => console.error(error));
    }, []);

    const visibleLinks = showAll ? linksData : linksData.slice(0, 5);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };


    useEffect(() => {

        fetchSiteData()
            .then((data) => setSiteData(data))
            .catch((error) => console.error(error));
    }, []);

    const infos = [
        { title: "Home", link: "/home" },
        { title: "About", link: `/about/:id` },
        { title: "Teams", link: "/teams" }
        // Add more items as needed
    ];

    const info = [
        { title: "News", link: "/news" },
        { title: "Notice", link: "/notice" },
        { title: "Contact", link: "/contact-us" },
        { title: "Activities", link: "/activ" }
        // Add more items as needed
    ];

    return (
        <>
            <Box
                sx={{
                    backgroundColor: "darkblue",
                    py: 1,
                    px: {
                        xs: 10,
                        xl: 37,
                    },
                    textAlign: "center",
                }}
            >
                <Grid
                    container
                    spacing={{ xs: 0, xl: 2 }}
                    sx={{
                        maxWidth: "xl",
                        mx: "auto",
                        marginTop: 3,
                    }}
                >
                    <Grid item sx={{ mb: 3 }} xs={12} md={3} xl={3}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: "bold",
                                color: "#ffffff",
                                textAlign: { xs: "center", xl: "left" },
                            }}
                        >
                            Important links
                        </Typography>
                        {Array.isArray(visibleLinks) && visibleLinks.length > 0 ? (
                            visibleLinks.map((item) => (
                                <Grid
                                    sx={{
                                        textAlign: { xs: "center", xl: "left" },
                                        cursor: "pointer",
                                    }}
                                    key={item.title}
                                    style={{ marginTop: "8px" }}
                                    item
                                    xs={12}
                                >
                                    <a
                                        href={item.links}
                                        style={{ textDecoration: "none", color: "#ffffff" }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Typography sx={{ fontSize: 14 }} component="span">{item.title}</Typography>

                                    </a>
                                </Grid>
                            ))
                        ) : (
                            <Typography>
                                {linksData.length === 0 ? "No links available." : "Loading..."}
                            </Typography>
                        )}
                        {linksData.length > 5 && (
                            <Typography
                                variant="subtitle2"
                                sx={{ cursor: "pointer", color: "#ffffff", mt: 2 }}
                                onClick={toggleShowAll}
                            >
                                {showAll ? "Read less" : "...Read more"}
                            </Typography>
                        )}
                    </Grid>
                    <Grid item sx={{ mb: 3 }} xs={12} md={3} xl={3}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: "bold",
                                color: "#ffffff",
                                textAlign: { xs: "center", xl: "left" },
                            }}
                        >
                            Page Links
                        </Typography>
                        {infos.map((item) => (
                            <Grid
                                sx={{
                                    textAlign: { xs: "center", xl: "left" },
                                    marginTop: "8px",
                                }}
                                key={item.title}
                                item
                                xs={12}
                            >
                                <Link
                                    style={{ textDecoration: "none", color: "#ffffff" }}
                                    to={item.link}
                                >
                                    <Typography sx={{ fontSize: 14 }}>{item.title}</Typography>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>


                    <Grid item sx={{ mb: 3 }} xs={12} md={3} xl={3}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: "bold",
                                color: "#ffffff",
                                textAlign: { xs: "center", xl: "left" },
                            }}
                        >
                            Page Links
                        </Typography>
                        {info.map((item) => (
                            <Grid
                                sx={{
                                    textAlign: { xs: "center", xl: "left" },
                                    marginTop: "8px",
                                }}
                                key={item.title}
                                item
                                xs={12}
                            >
                                <Link
                                    style={{ textDecoration: "none", color: "#ffffff" }}
                                    to={item.link}
                                >
                                    <Typography sx={{ fontSize: 14 }}>{item.title}</Typography>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>

                    <Grid
                        item
                        sx={{ textAlign: { xs: "center", md: "left", xl: "left" } }}
                        xs={12}
                        md={3}
                        xl={3}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: "bold",
                                color: "#ffffff",
                                textAlign: { xs: "center", xl: "left" },
                                marginBottom: "8px",
                            }}
                        >
                            Contact No.
                        </Typography>

                        <Link style={{ textDecoration: "none", color: "#ffffff" }}>
                            <Typography sx={{ fontSize: 14 }}>
                                <LocalPhoneIcon sx={{ fontSize: 19 }} />
                                {siteData?.phone}
                            </Typography>
                        </Link>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: "bold",
                                color: "#ffffff",
                                textAlign: { xs: "center", xl: "left" },
                                marginBottom: "8px",
                            }}
                        >
                            Email
                        </Typography>
                        <Link style={{ textDecoration: "none", color: "#ffffff" }}>
                            <Typography sx={{ fontSize: 14 }}>
                                <EmailIcon sx={{ fontSize: 19 }} />
                                {siteData?.email}

                            </Typography>
                        </Link>

                        <div style={{ display: "flex", alignItems: "center" }}>
                            <a
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    textAlign: "left",
                                    marginRight: "10px",
                                    color: "black",
                                }}
                            >
                                <FacebookIcon sx={{ color: "#0c88ef" }} />
                                <span style={{ marginLeft: "5px", color: "white" }}>
                                    Like us
                                </span>
                            </a>
                            <a
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textAlign: "left", color: "white" }}
                            >
                                <TwitterIcon sx={{ color: "red" }} />
                                <span style={{ marginLeft: "5px", color: "white" }}>
                                    Follow us
                                </span>
                            </a>
                        </div>
                    </Grid>
                </Grid>
                <Grid
                    container
                    justifyContent="center"
                    sx={{
                        maxWidth: "xl",
                        mx: "auto",
                        marginTop: "20px",
                    }}
                >
                    <Grid item xs={12} md={6} xl={8}>
                        <Typography
                            style={{ fontSize: 12 }}
                            sx={{
                                fontWeight: "bold",
                                color: "#ffffff",
                                textAlign: { xs: "center", xl: "left" },
                            }}
                        >
                            &copy; 2023 All Rights Reserved by Bhalchandra Secondary School
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} xl={4}>
                        <Typography
                            style={{ fontSize: 12 }}
                            sx={{
                                fontWeight: "bold",
                                color: "#ffffff",
                                textAlign: { xs: "center", xl: "right" },
                            }}
                        >
                            Made with 🙂🙂🙂 by
                            <a
                                href=""
                                style={{ textDecoration: "none", color: "#ffffff" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Anita
                            </a>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
