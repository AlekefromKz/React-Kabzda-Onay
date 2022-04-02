import React from 'react';
import s from './Post.module.css';

const Post = props => {
    return (
        <div className={s.item}>
            <img alt={""} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4j2gcKWzgJbtP4THqnDRJqr2fHO8jgLoM4Q&usqp=CAU"></img>
            {props.message}
            <div>
                <span>{props.likesCount}</span>
                <span>like</span>
            </div>
        </div>
    );
};

export default Post;
