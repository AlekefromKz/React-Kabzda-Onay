import {usersAPI} from '../api/api';
import {updateObjectInArray} from '../utils/object-helpers';

const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = 'SET-USER';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';

const initialState = {
    users: [],
    pageSize: 5,
    currentPage: 1,
    totalUsersCount: 0,
    isFetching: true,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: true }),
            };

        case UNFOLLOW_USER:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: false }),
            };

        case SET_USERS:
            return {
                ...state,
                users: [...action.users],
            };

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.page };

        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalCount };

        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching };

        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId),
            };

        default:
            return state;
    }
};

export const followSuccess = userId => ({ type: FOLLOW_USER, userId });
export const unfollowSuccess = userId => ({ type: UNFOLLOW_USER, userId });
export const setUsers = users => ({ type: SET_USERS, users });
export const setCurrentPage = page => ({ type: SET_CURRENT_PAGE, page });
export const setTotalUsersCount = totalCount => ({ type: SET_TOTAL_USERS_COUNT, totalCount });
export const toggleIsFetching = isFetching => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowUsers = (isFetching, userId) => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId });

export const loadUsers = (currentPage, pageSize) => {
    return async dispatch => {
        dispatch(toggleIsFetching(true));
        const data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        dispatch(toggleIsFetching(false));
    };
};

const followUnfollowFlow = async (dispatch, userId, APIMethod, actionCreator) => {
    dispatch(toggleFollowUsers(true, userId));
    const data = await APIMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowUsers(false, userId));
};

export const followUser = userId => {
    return async dispatch => {
        followUnfollowFlow(dispatch, userId, usersAPI.followUser.bind(usersAPI), followSuccess);
    };
};

export const unfollowUser = userId => {
    return async dispatch => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollowUser.bind(usersAPI), unfollowSuccess);
    };
};

export default usersReducer;
