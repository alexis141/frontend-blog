import React, { Component } from "react";

import BlogItems from "./blog-items";

export default class BlogContainer extends Component {
    constructor() {
        super();

        this.state = {
            isLoading: false,
        }
    }

    blogItems() {
        const data = ["Lex", "Cort", "Wes", "Jake"];

        return data.map(item => {
            return <BlogItems title={item} />;
        });
    }
    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>
        }


        return (
            <div>
                <h2>Blog Items go here...</h2>

                {this.blogItems()}

            </div>
        );
    }
}

