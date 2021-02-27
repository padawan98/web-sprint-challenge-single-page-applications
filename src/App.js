import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import PizzaTime from './PizzaTime';
import {useHistory} from 'react-router-dom';
import Validation from './Validation';
import * as yup from 'yup';



const App = () =>
{
  const history = useHistory();
    const [order,setOrder] = useState({});
    const[savedOrders,setSavedOrders] = useState([]);
    //saved orders is where all of the orders are being saved. Since we do not need to display them at the done page, I console.logged it

    //--**yupcaller uncomment**--
    const callYup = (name, isToppings) =>
    {
        yup.reach(Validation,name).validate(isToppings)
    }
    const handleChange = (event) =>
    {
        let isToppings = Object.keys(order).length<= 15?true:false;
        setOrder({...order,[event.target.name]:event.target.value==='checkbox'?event.target.checked:event.target.value});
        // console.log(event.target.name);
        callYup(event.target.name,isToppings); 
    }

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        setSavedOrders([...savedOrders,order]);
        console.log(order);
        // console.log(Object.keys(order).length); //used to use yup.validate
        setOrder({});
        document.getElementById("ree").reset();
    }   

    const handleClick = (event) =>
    {
        history.push(`/order`);
    }

  return(
    <div>
      <Switch>
        <Route exact path = "/"><Home handleClick={handleClick} handleSubmit={handleSubmit} handleChange={handleChange} order={order}/></Route>
        <Route path = "/order"><PizzaTime order={order}/></Route>
      </Switch>
    </div>
  )
}

export default App;