import Links from "./Links";
import "./button.css";
import { fetchLinkData } from "../Api/api";
import { useEffect, useState } from "react";

export default function Footer() {
    const [linksData, setLinksData] = useState([]);

    useEffect(() => {
        fetchLinkData()
            .then((data) => setLinksData(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="footer">
            <Links linksData={linksData} />
        </div>
    );
}
