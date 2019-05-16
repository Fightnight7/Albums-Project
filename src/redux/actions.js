import {
    SET_ALBUMS,
    SET_CURRENT_PAGE,
    SET_PHOTOS,
    SET_SELECTED_ALBUM_TITLE,
    SET_TOTAL_PAGES,
    SET_USERS
} from "./data-types";


export let setUsersAC = (data) => {
    return {
        type: SET_USERS,
        data: data
    }
};

export let setAlbumsAC = (data) => {
    return {
        type: SET_ALBUMS,
        data: data
    }
};

export let setPhotosAC = (data) => {
    return {
        type: SET_PHOTOS,
        data: data
    }
};

export let setCurrentPageAC = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        page: page
    }
};

export let setSelectedAlbumTitleAC = (title) => {
    return {
        type: SET_SELECTED_ALBUM_TITLE,
        title: title
    }
};

export let setTotalPagesAC = (pageCount) => {
    return {
        type: SET_TOTAL_PAGES,
        pageCount: pageCount
    }
};