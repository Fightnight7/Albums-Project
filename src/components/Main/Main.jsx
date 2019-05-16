import React from 'react'
import classes from './Main.module.css'
import Album from './Album/Album'
import ModalWindow from './ModalWindow/ModalWindow'
import PropTypes from 'prop-types'
import _ from 'lodash'

const Main = (props) =>{
    const {modalWindowOpen, modalWindowClose,  pageChangeHandler, photosFiltered, users, albums, loading, modalWindowShow, selectedAlbumTitle, currentPage,  totalPages} = props;

    Main.propTypes = {
        modalWindowOpen: PropTypes.func,
        modalWindowClose: PropTypes.func,
        pageChangeHandler: PropTypes.func,
        photosFiltered: PropTypes.array,
        users: PropTypes.array,
        albums: PropTypes.array,
        loading: PropTypes.bool,
        modalWindowShow: PropTypes.bool,
        selectedAlbumTitle: PropTypes.string,
        currentPage: PropTypes.number,
        totalPages: PropTypes.number,
    };

    let merge = _.merge(users, albums);

    const AlbumsMap = merge.map(t=>{
        return (
            <Album
                modalWindowOpen={modalWindowOpen}
                users={t.name}
                key={t.id}
                id={t.id}
                title={t.title}/>
        )
    });

    let content = (
        <React.Fragment>
            <div className={classes.main}>
                <div className={classes.header}>
                    <h2 className={classes.h2}>Albums</h2>
                </div>
                <div className={classes.albumContainer}>
                    {AlbumsMap}
                </div>
                <div style={{display: modalWindowShow? "flex":"none"}} className={classes.modalBackground}>
                    <ModalWindow
                        modalWindowClose={modalWindowClose}
                        pageChangeHandler={pageChangeHandler}
                        photosFiltered={photosFiltered}
                        currentPage={currentPage}
                        selectedAlbumTitle={selectedAlbumTitle}
                        totalPages={totalPages}
                    />
                </div>
            </div>
        </React.Fragment>
    );

    if (loading){content = <p className={classes.loading}>Loading Albums...</p>}
    return content
};

export default Main