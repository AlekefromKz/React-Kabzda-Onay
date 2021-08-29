import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostRef = React.createRef();

    let AddPost = () => {
        props.dispatch({type: 'ADD-NEW-POST'});
    }

    let handleChange = () => {
        const action = {type: 'UPDATE-NEW-POST-TEXT', postMessage: newPostRef.current.value}
        props.dispatch(action);
    }

    return (
        <div className={s.MyPosts}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea
                        ref={newPostRef}
                        value={props.newPostText}
                        onChange={handleChange}
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