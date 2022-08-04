import React from 'react';

function MessageItem(props) {
    return (
        <>
        <div className='bg-blue'>
       <ul><li>{props.item}</li></ul>
       </div>
        </>
    );
}

export default MessageItem;