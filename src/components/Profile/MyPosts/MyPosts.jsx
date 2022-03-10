import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostRef = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let updateNewPost = () => {
        props.updateNewPostText(newPostRef.current.value);
    }

    return (
        <div className={s.MyPosts}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea
                        ref={newPostRef}
                        value={props.newPostText}
                        onChange={updateNewPost}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.postsBlock}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;