import axios from "axios";
import API_URLS from "./urls";

export const fetchCarouselData = async () => {
    try {
        const response = await axios.get(API_URLS.home);
        return response.data.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const fetchAboutData = async () => {
    try {
        const response = await axios.get(API_URLS.about);
        return response.data.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const fetchAboutUsData = async () => {
    try {
        const response = await axios.get(API_URLS.about);
        return response.data.data.find((item) => item.slug === "about-us");
    } catch (error) {
        console.error(error);
        return null;
    }
};