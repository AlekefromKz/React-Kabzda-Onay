import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";

const MyPostsContainer = (props) => {
    const state = props.store.getState();

    const addPostCallback = () => {
        props.store.dispatch(addPostActionCreator());
    }

    const updateNewPostTextCallback = (text) => {
        props.store.dispatch(updateNewPostActionCreator(text));
    }

    return <MyPosts
        addPostCallback={addPostCallback}
        updateNewPostTextCallback={updateNewPostTextCallback}
        posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText}
    />
}

export default MyPostsContainer;