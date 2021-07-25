import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                new post
            </div>
            <Post message="Hey bro!" likesCount="15"/>
            <Post message="My second post" likesCount="20"/>
        </div>
    );
}

export default MyPosts;