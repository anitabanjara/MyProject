import React, { useState, useEffect } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Link,
    Card,
    CardContent,
    Typography,
} from "@mui/material";
import { fetchLinkData } from "../Api/api";

export default function Web() {
    const [linksData, setLinksData] = useState([]);

    useEffect(() => {
        fetchLinkData()
            .then((data) => setLinksData(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <Card className="data-card">
            <CardContent sx={{ textAlign: "center" }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: "bold",
                        color: "#0000FF",
                        borderBottom: "4px solid #0000FF",
                        display: "inline",
                        marginBottom: "20px",
                    }}
                >
                    Web
                </Typography>
                <TableContainer
                    component={Paper}
                    sx={{
                        margin: "auto",
                        marginTop: "70px",
                        maxWidth: "80%",
                        overflowX: "auto", // Add horizontal scrolling on smaller screens
                    }}
                >
                    <Table
                        sx={{
                            margin: "auto",
                            minWidth: 400, // Minimum width of the table
                        }}
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    sx={{
                                        fontWeight: "bold",
                                        color: "black",
                                        fontSize: "1.5rem",
                                    }}
                                >
                                    Title
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontWeight: "bold",
                                        color: "black",
                                        fontSize: "1.5rem",
                                    }}
                                >
                                    Description
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontWeight: "bold",
                                        color: "black",
                                        fontSize: "1.5rem",
                                    }}
                                >
                                    Link
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {linksData.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell sx={{ fontSize: "1rem" }}>{row.title}</TableCell>
                                    <TableCell
                                        dangerouslySetInnerHTML={{ __html: row.excerpt }}
                                        sx={{ fontSize: "1rem" }}
                                    />
                                    <TableCell>
                                        <Link
                                            href={row.links}
                                            target="_blank"
                                            rel="noopener"
                                            sx={{ fontSize: "1rem" }}
                                        >
                                            {row.links}
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    );
}
