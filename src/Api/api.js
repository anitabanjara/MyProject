import axios from "axios";
import API_URLS from "./urls";


export const fetchCarouselData = async () => {
    try {
        const response = await axios.get(`${API_URLS}sliders`);
        return response.data.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const fetchAboutData = async () => {
    try {
        const response = await axios.get(`${API_URLS}aboutUs`);
        return response.data.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const fetchAboutUsData = async () => {
    try {
        const response = await axios.get(`${API_URLS}aboutUs`);
        return response.data.data.find((item) => item.slug === "about-us");
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const fetchVoiceData = async () => {
    try {
        const response = await axios.get(`${API_URLS}aboutUs`);
        const data = response.data.data;

        const principalData = data.find((item) => item.title === "Message from the Principal");
        const chairData = data.find((item) => item.title === "Message from the SMC Chair");

        return {
            principalSlug: principalData?.slug,
            principalImage: principalData?.photo,
            chairSlug: chairData?.slug,
            chairImage: chairData?.photo,
        };
    } catch (error) {
        console.error(error);
        return null;
    }
};



export const fetchActivityData = async () => {
    try {
        const response = await axios.get(`${API_URLS}activitiesDetail`);
        return response.data.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const fetchActivitiesData = async () => {
    try {
        const response = await axios.get(`${API_URLS}activitiesDetail`);
        return response.data.data;

    } catch (error) {
        console.error(error);
        return [];
    }
};


export const fetchBlogData = async () => {
    try {
        const response = await axios.get(`${API_URLS}blogs`);
        const data = response.data.data;
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const fetchLinkData = async () => {
    try {
        const response = await fetch(`${API_URLS}links`);
        const data = await response.json();
        return data.data.Web;
    } catch (error) {
        console.error("Error fetching links data:", error);
        return [];
    }
};

export const fetchNoticeData = async () => {
    try {
        const response = await axios.get(`${API_URLS}notice`);
        return response.data.data;

    } catch (error) {
        console.error(error);
        return [];
    }
};
export const fetchTeamsData = async () => {
    try {
        const response = await axios.get(`${API_URLS}team`);
        // console.log('API response:', response.data); // Log the API response
        return response.data.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};


export const fetchGalleryData = async () => {
    try {
        const response = await axios.get(`${API_URLS}gallery`);
        return response.data.data;

    } catch (error) {
        console.error(error);
        return [];
    }
};




export const fetchSiteData = async () => {
    try {
        const response = await axios.get(`${API_URLS}siteSetting`);
        return response.data.data;

    } catch (error) {
        console.error(error);
        return [];
    }
};













