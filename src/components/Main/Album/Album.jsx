import React from 'react'
import classes from './Album.module.css'

const Album = (props) => {
    const {modalWindowOpen, title, users, id} = props;

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <h3>{title}</h3>
            </div>
            <div className={classes.bottomWindow}>
                <button onClick={()=>modalWindowOpen(id, title)}>View</button>
                <p>{users}</p>
            </div>
        </div>
    )
};

export default Album