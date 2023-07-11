import React, { useEffect, useState } from 'react';
import { fetchBlogData } from '../Api/api';

const Blog = () => {
    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        fetchBlogData()
            .then((data) => setBlogData(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <h1>Blog</h1>
            {blogData.map((blog) => (
                <div >
                    <h2 style={{ color: 'blue' }}>{blog.title}</h2>
                    <p></p>
                </div>
            ))}
        </div>
    );
};

export default Blog;
