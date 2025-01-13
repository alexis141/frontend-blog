import React from "react";
import { Link } from "react-router";

import BlogContainer from "../blog/blog-container";

export default function() {
    return (
        <div>
            <h1>Home</h1>

            <Link to="/blog">Start Exploring</Link>
            <BlogContainer />
            <Link to="/destinations">Destinations</Link>
        </div>
    )
}