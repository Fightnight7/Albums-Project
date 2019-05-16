import React, {useState, useEffect} from 'react'
import {connect} from "react-redux";
import Main from "./Main";
import axios from "axios";
import {
    setUsersAC,
    setAlbumsAC,
    setPhotosAC,
    setCurrentPageAC,
    setSelectedAlbumTitleAC,
    setTotalPagesAC
    } from "../../redux/actions";

const MainContainer = (props) => {
    const [loading, setLoading] = useState(false);
    const [modalWindowShow, setModalWindowShow] = useState(false);
    const [photosFiltered, setPhotosFiltered] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(
                usersRes => {
                    props.setUsers(usersRes.data.slice(0, 9));
                    return axios.get('https://jsonplaceholder.typicode.com/albums');
                })
            .then(
                albumsRes => {
                    props.setAlbums(albumsRes.data.slice(0, 9));
                    setLoading(false);
                })
            .catch((error) => {
                console.log(error)
            });
    }, []);

    const modalWindowOpen = (async (albumId,
                                    albumTitle) => {
        const result = await axios(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
        props.setPhotos(result.data);
        props.setTotalPages(Math.ceil(result.data.length / 9));
        props.setSelectedAlbumTitle(albumTitle);
        setPhotosFiltered(result.data.slice(0, 9));
        setModalWindowShow(true);
        props.setCurrentPage(1)
    });

    const modalWindowClose = () => {
        setModalWindowShow(false)
    };

    const pageChangeHandler = (page = 1) => {
        if (page >= 1 && page <= 6) {
            props.setCurrentPage(page);
        }
        switch (page) {
            case 1:
                setPhotosFiltered(props.photos.slice(0, 9));
                break;
            case 2:
                setPhotosFiltered(props.photos.slice(9, 18));
                break;
            case 3:
                setPhotosFiltered(props.photos.slice(18, 27));
                break;
            case 4:
                setPhotosFiltered(props.photos.slice(27, 36));
                break;
            case 5:
                setPhotosFiltered(props.photos.slice(36, 45));
                break;
            case 6:
                setPhotosFiltered(props.photos.slice(45));
                break;
            default:
                console.log("This is last page");
        }
    };

    return(
        <Main
            modalWindowOpen={modalWindowOpen}
            modalWindowClose={modalWindowClose}
            modalWindowShow={modalWindowShow}
            pageChangeHandler={pageChangeHandler}
            users={props.users}
            albums={props.albums}
            photos={props.photos}
            loading={loading}
            photosFiltered={photosFiltered}
            currentPage={props.currentPage}
            selectedAlbumTitle={props.selectedAlbumTitle}
            totalPages={props.totalPages}
        />)
};

let mapStateToProps = (store) => {
    return {
        users: store.albumsReducer.users,
        albums: store.albumsReducer.albums,
        photos: store.albumsReducer.photos,
        currentPage: store.albumsReducer.currentPage,
        selectedAlbumTitle: store.albumsReducer.selectedAlbumTitle,
        totalPages: store.albumsReducer.totalPages
    }
};


let mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (data) => {
            dispatch(setUsersAC(data));
        },
        setAlbums: (data) => {
            dispatch(setAlbumsAC(data));
        },
        setPhotos: (data) => {
            dispatch(setPhotosAC(data));
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page));
        },
        setSelectedAlbumTitle: (title) => {
            dispatch(setSelectedAlbumTitleAC(title));
        },
        setTotalPages: (pagesCount) => {
            dispatch(setTotalPagesAC(pagesCount));
        }
    }
};

const MainArticlePageContainer = connect(mapStateToProps, mapDispatchToProps)(MainContainer);

export default MainArticlePageContainer;