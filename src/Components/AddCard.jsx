import React from 'react';

const AddCard = ({id, onClick}) => {
    return (
        <>
            <div className='card'>
                <div className='add-widget' onClick={()=>onClick(id)}>
                    <p>&#43; &nbsp;Add Widget</p>
                </div>
            </div>
        </>
    );
}

export default React.memo(AddCard);
