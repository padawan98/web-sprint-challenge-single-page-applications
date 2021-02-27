import React, {useState} from 'react';


const PizzaTime = (props) =>
{
    const {order} = props;
    console.log(order);
    
    return(
        <div>
            <h1>Order's up!</h1>
            <p>{order.choice}</p>
            <p>{order.size}</p>
            <p>{order.pepperoni}</p>
            <p>{order.calabresa}</p>
            <p>{order.shrimp}</p>
            <p>{order.catupiry}</p>
            <p>{order.gltn}</p>
            <p>{order.special}</p>
            <p>{order.items}</p>
        </div>
    )
}

export default PizzaTime;
