const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const LOAD_USERS = 'LOAD-USER';

const initialState = {
    users: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId){
                        return {
                            ...user,
                            followed: true,
                        }
                    }
                    return user
                })
            }

        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId){
                        return {
                            ...user,
                            followed: false,
                        }
                    }
                    return user
                })
            }

        case LOAD_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }

        default:
            return state;
    }
}

export const followUserAC = (userId) => ({type: FOLLOW_USER, userId})
export const unfollowUserAC = (userId) => ({type: UNFOLLOW_USER, userId})
export const loadUsersAC = (users) => ({type: LOAD_USERS, users})

export default usersReducer;