import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function links() {
    const links = [
        {
            title: "E-Library",
            link: "https://pustakalaya.org/en/",
        },
        {
            title: "Teaching",
            link: "https://mysecondteacher.com.np/",
        },
        {
            title: "SEE",
            link: "https://see.gov.np/",
        },
        {
            title: "Curriculum Development Center",
            link: "https://see.gov.np/",
        },
        {
            title: "Grid",
            link: "https://www.moecdc.gov.np/en/specification-grid",
        },
        {
            title: "TSC",
            link: "https://tsc.gov.np/",
        },
        {
            title: "IEMIS",
            link: "https://iemis.doe.gov.np/",
        },
        {
            title: "Learn English",
            link: "https://learnenglishkids.britishcouncil.org/",
        },
        {
            title: "Learn English for teens",
            link: "https://learnenglishteens.britishcouncil.org/",
        },
        {
            title: "Learning Portal",
            link: "https://www.google.com/",
        },
        {
            title: "Open Learning Resources",
            link: "https://www.unesco.org/en/open-educational-resources",
        },
        {
            title: "Steam Education Resource",
            link: "https://www.unesco.org/en/open-educational-resources",
        },
        {
            title: "PBS Learners' Resources",
            link: "https://www.unesco.org/en/open-educational-resources",
        },
    ];
    const info = [
        {
            title: "Home",
            link: "/home",
        },
        {
            title: "Activities",
            link: "/",
        },
        {
            title: "Teams",
            link: "/teams",
        },

    ];

    const infos = [
        {
            title: "News",
            link: "/",
        },
        {
            title: "Notices",
            link: "/",
        },
        {
            title: "Gallery",
            link: "/",
        },
        {
            title: "Contact",
            link: "/",
        },

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
                        {links.map((item) => (
                            <Grid
                                sx={{
                                    textAlign: { xs: "center", xl: "left" },
                                }}
                                key={item.title}
                                style={{ marginTop: "8px" }}
                                item
                                xs={12}
                            >
                                <a
                                    href={item.link}
                                    style={{ textDecoration: "none", color: "#ffffff" }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Typography sx={{ fontSize: 14 }}>{item.title}</Typography>
                                </a>
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
                                9851237436
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
                                bhalchandraschool17@gmail.com
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