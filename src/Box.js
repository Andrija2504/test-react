import logo from './logo.svg';
import './Box.css';
import React, {useState, useEffect} from 'react'; 

function Box(props) {
    let val = props.item;

    const removeButton = (e) => {
        e.preventDefault();
        alert('izbrisa ga')
    }
    return (
        <div>
      <form className='forma'>
        <div className='formDiv'>
            {val.firstName}
        </div>
        <div className='formDiv'>
            {val.lastName}
        </div>
        <div className='formDiv'>
            {val.street}
        </div>
        <div className='formDiv'>
            {val.city}
        </div>
        <div className='formDiv' style={{alignSelf: 'flex-end', width: '15%'}}>
          <button className='btn btn-primary' onClick={removeButton}>Remove</button>
        </div>
      </form>
    </div>
    );
}

export default Box;