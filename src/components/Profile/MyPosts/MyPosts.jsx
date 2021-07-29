import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        { id: 1, message: "Hey bro", likesCount: 15 },
        { id: 1, message: "Hey bro", likesCount: 15 },
        { id: 1, message: "Hey bro", likesCount: 15 },
        { id: 1, message: "Hey bro", likesCount: 15 },
        { id: 2, message: "My second post", likesCount: 128 }
    ]

    let postElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

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
            <div className={s.postsBlock}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;