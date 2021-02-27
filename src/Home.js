import React from 'react';
import styled from 'styled-components';
import Form from './Form';
// import {Switch, Route} from 'react-router-dom';
// import Person from './Person';
// import * as yup from 'yup';

// const initialPizza = {}
const Imagehorray = styled.div`
  display:flex;
  justify-content:center;
  img
  {
    width:80%;
  }
`
const Hdr = styled.div`
  text-align:center;
`

const FormHider = styled.div`

  `


const Home = (props) =>
{
    const {handleClick, handleSubmit, handleChange, order} = props;
    const  show = () =>
    {
        //WHEN i TOGGLE BUTTON
        let x = document.getElementById("showmepls");
        if (x.style.display === "none") 
        {
            x.style.display = "block";
        } 
        else 
        {
            x.style.display = "none";
        }
    }
  return(
    <Hdr>
      <h1>Lambda Eats</h1>
      <Imagehorray>
        <img src="https://images.pexels.com/photos/1596888/pexels-photo-1596888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt ="Pizza"/>
      </Imagehorray>
      <button onClick={show}>Pizza?</button>
      <FormHider id="showmepls">
        <Form handleClick={handleClick} handleSubmit={handleSubmit} handleChange={handleChange} order={order}/>
      </FormHider>
    </Hdr>
  )
}

export default Home;