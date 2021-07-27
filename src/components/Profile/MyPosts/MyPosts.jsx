import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.MyPosts}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.postsBlock}></div>
            <Post message="Hey bro!" likesCount="15"/>
            <Post message="My second post" likesCount="20"/>
        </div>
    );
}

export default MyPosts;