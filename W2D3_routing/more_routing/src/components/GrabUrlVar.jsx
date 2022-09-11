import React from 'react';
import { useParams } from 'react-router-dom';

const GrabUrlVar = (props) => {

    const { varname } = useParams();
    console.log(varname);


    return (
        <div>
            {
                isNaN(varname) ? <p>{varname} is a letter</p> : <p>{varname} is a number</p> 
            }
        </div>
    )
}

export default GrabUrlVar