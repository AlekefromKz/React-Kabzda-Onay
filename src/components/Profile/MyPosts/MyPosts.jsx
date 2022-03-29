import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/Form/FormControls';
import { maxLengthValidator, required } from '../../../utils/validators/validators';

const maxLength100 = maxLengthValidator(100);

const NewPostForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name={'newPostBody'}
                    placeholder={'Enter your news'}
                    validate={[required, maxLength100]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
};

const NewPostReduxForm = reduxForm({ form: 'newPost' })(NewPostForm);

const MyPosts = props => {
    const postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    const addNewPost = values => {
        props.addPostCallback(values.newPostBody);
    };

    return (
        <div className={s.MyPosts}>
            <h3>my posts</h3>
            <NewPostReduxForm onSubmit={addNewPost} />
            <div className={s.postsBlock}>{postElements}</div>
        </div>
    );
};

export default MyPosts;
