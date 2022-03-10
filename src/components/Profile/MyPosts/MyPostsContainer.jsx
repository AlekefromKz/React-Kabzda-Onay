import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    const updateNewPostText = (text) => {
        props.store.dispatch(updateNewPostActionCreator(text));
    }

    return <MyPosts
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText}
    />
}

export default MyPostsContainer;