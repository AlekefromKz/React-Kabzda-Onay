import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostRef = React.createRef();

    let AddPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let updateNewPost = () => {
        props.dispatch(updateNewPostActionCreator(newPostRef.current.value));
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
                    <button onClick={AddPost}>Add post</button>
                </div>
            </div>
            <div className={s.postsBlock}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;