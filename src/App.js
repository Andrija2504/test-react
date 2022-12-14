import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'; 
import Box from './Box.js';

function App() {

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [street, setStreet] = useState(null);
  const [city, setCity] = useState(null);
  const [number, setNumber] = useState(0);

  const [list, setList] = useState([]);

  const handleClick = () => {
    if(firstName == null || lastName == null || street == null || city == null
      || firstName === '' || lastName === '' || street === '' || city === ''){
      alert('Fill all data');
    }
    else {
      setNumber(number+1);
      const listObject = [{
        'number': number,
        'firstName': firstName,
        'lastName': lastName,
        'street': street,
        'city': city
      }]

      setList(list => ([
        ...list,
        ...listObject
      ]));

    }
  }

  return (
    <div style={{backgroundColor: '#A9A9A9', padding: '10px'}}>
      <div className='divClass' style={{backgroundColor: 'white'}}>
        <form className='forma'>
          <div className='formDiv'>
            <label for="firstName" id="firstName">Firstname</label> 
            <input type="text" id="firstName" name="firstName" placeholder='Firstname' 
            onChange={(event) => {
              setFirstName(event.target.value);
            }}/>
          </div>
          <div className='formDiv'>
            <label for="lastName" id="lastName">Lastname</label> 
            <input type="text" id="lastName" name="lastName" placeholder='Lastname' 
            onChange={(event) => {
              setLastName(event.target.value);
            }}/>
          </div>
          <div className='formDiv'>
            <label for="street" id="street">Street</label> 
            <input type="text" id="street" name="street" placeholder='Street' style={{width:'250px'}} 
            onChange={(event) => {
              setStreet(event.target.value);
            }}/>
          </div>
          <div className='formDiv'>
            <label for="city" id="city">City</label> 
            <input type="text" id="city" name="city" placeholder='City' style={{width:'250px'}} 
            onChange={(event) => {
              setCity(event.target.value);
            }}/>
          </div>
          <div className='formDiv' style={{alignSelf: 'flex-end', width: '15%'}}>
            <button type='button' className='btn btn-primary' onClick={handleClick}>Insert</button>
          </div>
        </form>
      </div>
    {list.map((val, key) => {
      return(
        <Box item={val} list={list} setList={setList}/>
      )
    })}
    
    </div>
  );
}

export default App;
