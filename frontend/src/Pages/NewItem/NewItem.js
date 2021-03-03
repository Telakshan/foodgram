import React, { useState } from 'react';
import axios from 'axios';

import './NewItem.css';

const NewItem = () => {

    const [formState, changeFormState] = useState({
        title: {
            value: '',
        },
        description: {
            value: ''
        },
        address: {
            value: ''
        }
    })

    return (
     
        <form className='form'>
           
            <button className='upload'>
            <i className='fas fa-plus'/>
            Upload
            </button>
            
            <br/>
            <label>
                Title
            </label>
            <input type='text' placeholder='Enter title here...'>
            </input>
            <label>
                Description
            </label>
            <input type='text' placeholder='Enter description here...'>
            </input>
            <label>
                Address
            </label>
            <input type='text' placeholder='Enter address here...'>
            </input>
            <button type='submit'>
                Post
            </button>
        </form>
    )
}

export default NewItem
