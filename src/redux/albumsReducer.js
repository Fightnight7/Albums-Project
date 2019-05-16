import {
    SET_ALBUMS,
    SET_CURRENT_PAGE,
    SET_PHOTOS,
    SET_SELECTED_ALBUM_TITLE,
    SET_TOTAL_PAGES,
    SET_USERS
    } from './data-types'

let initialState = {
    users: [],
    albums: [],
    photos: [],
    currentPage: 1,
    selectedAlbumTitle: "",
    totalPages: 0
};

const albumsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.data
            };
        case SET_ALBUMS:
            return {
                ...state,
                albums: action.data
            };
        case SET_PHOTOS:
            return {
                ...state,
                photos: action.data
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            };
        case SET_SELECTED_ALBUM_TITLE:
            return {
                ...state,
                selectedAlbumTitle: action.title
            };
        case SET_TOTAL_PAGES:
            return {
                ...state,
                totalPages: action.pageCount
            };
        default:
            return state;
    }
};

export default albumsReducer;