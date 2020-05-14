import React from 'react';
import './ListItem.scss';

const ListItem = (props) => {
    return (
        <div className="ListItem">{props.message}</div>
    );
}

export default ListItem;