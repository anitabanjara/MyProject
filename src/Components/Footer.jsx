import Links from "./Links";
import "./button.css";
import { fetchLinksData } from "../Api/api";
import { useEffect, useState } from "react";

export default function Footer() {
    const [linksData, setLinksData] = useState([]);

    useEffect(() => {
        fetchLinksData()
            .then((data) => setLinksData(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="footer">
            <Links linksData={linksData} />
        </div>
    );
}
