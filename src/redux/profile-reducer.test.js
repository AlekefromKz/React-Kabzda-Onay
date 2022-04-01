import profileReducer, {addPostActionCreator} from "./profile-reducer";

const state = {
    posts: [
        { id: 1, message: 'Hey bro', likesCount: 15 },
        { id: 2, message: 'Hey bro', likesCount: 15 },
        { id: 3, message: 'Hey bro', likesCount: 15 },
        { id: 4, message: 'Hey bro', likesCount: 15 },
        { id: 5, message: 'My second post', likesCount: 128 },
    ],
};

test('new post should be added to the state', () => {
    const action = addPostActionCreator("salem")
    const newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(6);
});


test('message of new post should be correct', () => {
    const action = addPostActionCreator("salem")
    const newState = profileReducer(state, action)
    expect(newState.posts[5].message).toBe("salem");
});
