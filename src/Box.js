import logo from './logo.svg';
import './Box.css';
import React, {useState, useEffect} from 'react'; 

function Box({item, list, setList}) {
    let val = item;

    const removeButton = (e, numberToDelete) => {
        setList(current =>
        current.filter(list => {
            return list.number !== numberToDelete;
        }));

        console.log(list);

        alert('asdasdas');

    }
    return (
        <div className='divClass' style={{backgroundColor: 'white'}}>
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
          <button type='button' className='btn btn-primary' onClick={() => removeButton(val.number)}>Remove</button>
        </div>
      </form>
    </div>
    );
}

export default Box;