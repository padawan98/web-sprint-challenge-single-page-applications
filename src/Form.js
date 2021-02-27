import React, {useState} from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
// import { object } from 'yup/lib/locale';
import Validation from './Validation';
import {useHistory} from 'react-router-dom';

const StyledForm = styled.div`
    text-align:center;
    width:80%;
    margin:0 auto;

`





const Form = (props) =>
{
    const {handleClick, handleSubmit, handleChange, order} = props;
    

    return(
        <StyledForm onSubmit={handleSubmit}>
            <form id="ree">
                <h1>Build Your Own Brazilian Pizza</h1>
                <h2>Choice of Size</h2>
                <p>Required</p>
                <select name="size" onChange={handleChange} value={order.select}>
                    <option value="">--Please choose an option--</option>
                    <option value='Individual'>Individual</option>
                    <option value='Small'>Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='Large'>Large</option>
                </select>
                <h2>Choice of Sauce</h2>
                <p>Required</p>
                <input type="radio" name="choice" onChange={handleChange} value="Original Red"/>Original Red
                <input type="radio" name="choice" onChange={handleChange} value="Garlic Ranch"/>Garlic Ranch
                <input type="radio" name="choice" onChange={handleChange} value="BBQ Sauce"/>BBQ Sauce
                <input type="radio" name="choice" onChange={handleChange} value="Spinach Alfred"/>Spinach Alfredo
                <h2>Add Toppings</h2>
                <p>Choose up to 10</p>
                <div name="cancer">
                    <input type="checkbox" name="pepperoni" onChange={handleChange} value={order.pepperoni==='on'?'pepperoni':''}/>Pepperoni
                    <input type="checkbox" name="calabresa" onChange={handleChange} value={order.calabresa==='on'?'calabresa':''}/>Calabresa Sausage
                    <input type="checkbox" name="shrimp" onChange={handleChange} value={order.shrimp==='on'?'shrimp':''}/>Shrimp
                    <input type="checkbox" name="catupiry" onChange={handleChange} value={order.catupiry==='on'?'catupiry':''}/>Catupiry
                    {/* <input type="checkbox" name="topping5" onChange={handleChange} value="Grilled Chicken"/>Grilled Shredded Chicken
                    <input type="checkbox" name="topping6" onChange={handleChange} value="Onions"/>Onions
                    <input type="checkbox" name="topping7" onChange={handleChange} value="Green Pepper"/>Green Pepper
                    <input type="checkbox" name="topping8" onChange={handleChange} value="Diced Tomates"/>Diced Tomatoes
                    <input type="checkbox" name="topping9" onChange={handleChange} value="Dried meat"/>Dried meat
                    <input type="checkbox" name="topping10" onChange={handleChange} value="Biquinho Pepper"/>Biquinho Pepper
                    <input type="checkbox" name="topping11" onChange={handleChange} value="Leeks"/>Leek
                    <input type="checkbox" name="topping12" onChange={handleChange} value="Banana"/>Banana
                    <input type="checkbox" name="topping13" onChange={handleChange} value="Corn"/>Corn
                    <input type="checkbox" name="topping14" onChange={handleChange} value="Extra Cheese"/>Extra Cheese */}
                </div>
                <h2>Choice of Substitute</h2>
                <p>Choose up to 1</p>
                <input type="checkbox" name="gltn" onChange={handleChange} value={order.gltn}/>Gluten Free Crust(+100$)
                <h2>Special Instructions</h2>
                <input type='text' name = "special" onChange={handleChange} value = {order.instruction} />
                <select name="items" onChange={handleChange} value={order.nbr}>
                    <option value="">How Many</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
                <button onClick={handleClick}>Add to Order</button>
            </form>
        </StyledForm>
    )
}

export default Form;