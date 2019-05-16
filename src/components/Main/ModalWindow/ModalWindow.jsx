import React from 'react'
import classes from './ModalWindow.module.css'

const ModalWindow = (props) => {
    const {pageChangeHandler, modalWindowClose, photosFiltered, selectedAlbumTitle, currentPage, totalPages} = props;

    let albumImageMap = photosFiltered.map(t=>{
        return (
            <div className={classes.albumImage} key={t.id}>
                <h3>{t.title}</h3>
            </div>
        )
    });

    let pages = [];
    for (let i = 1; i <= totalPages; i++){
        pages.push(i)
    }

    let pagesMap = pages.map(t => {
        return (
            <button
                key={t}
                disabled={currentPage===t}
                className={classes.page}
                onClick={()=>pageChangeHandler(t)}>
                {t}</button>
        )
    });

    return(
        <div className={classes.modalWindow}>
            <header>
                <div className={classes.title}>{selectedAlbumTitle}</div>
                <img onClick={modalWindowClose} src={require('../Album/images/icon_cross.png')} alt="CrossIcon"/>
            </header>
            <main>
                {albumImageMap}
            </main>
            <div className={classes.pagination}>
                <div className={classes.pagesWindow}>
                    <div
                        className={classes.previous}
                        onClick={()=>pageChangeHandler(currentPage-1)}>
                        Previous</div>

                        {pagesMap}
                    <div
                        className={classes.page}
                        onClick={()=>pageChangeHandler(currentPage+1)}>
                        Next</div>
                </div>
            </div>
        </div>
    )
};

export default ModalWindow;

