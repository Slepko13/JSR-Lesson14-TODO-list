import React from 'react';

import './Item.scss';

const Item = (props) => {
    return (
        <div className="Item">

            {!props.inCorrection ?
                (<>

                    <div onDoubleClick={props.setInput} className={props.isDone ? "messageDone" : "message"}> {props.message}</div>
                    <div className="status">
                        <div className={props.isDone ? "done isDone" : "done"} onClick={props.toggleIsDone}>V</div>
                        <div className="delete" onClick={props.deleteListItem}>X</div>

                    </div>



                </>)
                :
                (<div className="correction">
                    <input className="correctionInput"
                        value={props.correction}
                        onChange={props.handleCorrection}
                        onBlur={props.setDiv}
                        onKeyPress={props.setDivEnter}
                        autoFocus
                    />
                </div>)
            }


        </div>
    );
}

export default Item;