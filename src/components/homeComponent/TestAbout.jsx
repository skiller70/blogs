import React from 'react';
import { useSelector } from 'react-redux';
function TestAbout(props) {
    const testData = useSelector(state=> state.custom.POST_DATA)
    
    
    return (
       
       <div>
        {console.log('render')}
            <h1>hello {testData} </h1>
        </div>
    );
}

export default TestAbout;