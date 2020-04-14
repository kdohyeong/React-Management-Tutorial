import React, { Component } from 'react';
import './App.css';
import Customer from './Components/Customer';


const customers = [
  {
  'id': 1,
  'image':'https://placeimg.com/64/64/1',
  'name':'김도형',
  'birthday':'940303',
  'gender':'남자',
  'job':'대학생'
},
{
  'id': 2,
  'image':'https://placeimg.com/64/64/2',
  'name':'이순신',
  'birthday':'020722',
  'gender':'남자',
  'job':'장군'
},
{
  'id': 3,
  'image':'https://placeimg.com/64/64/3',
  'name':'홍길동',
  'birthday':'840415',
  'gender':'남자',
  'job':'의적'
}
]

                                                ///map 할때는 key값 넣어주기
class App extends Component {

  render(){
  return (

      customers.map(c => {
        return (<Customer 
        key ={c.id}
        id={c.id}
        image= {c.image}
        name={c.name}
        birthday = {c.birthday}        
        gender={c.gender}
        job = {c.job}
        ></Customer>
        );
    })
  )
  }
}

export default App;
