import React, {useState,useEffect} from 'react'

const CreateItem = (props) => {
    const {item,onChangeHandler,onSubmitHandler,buttonText,errors,exist} = props;
    return (
        <>
        <h1>My items</h1>
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>{exist?exist:errors.name?errors.name.message:"Product Name"}</label>
                <input type="text" name="name" value={item.name}onChange={onChangeHandler} />
            </div>

            <div>
                <label>Carbs</label>
                <input type="number" name="carbs" value={item.carbs} onChange={onChangeHandler}/>
            </div>
            <div>
                <label>Proteins</label>
                <input type="number" name="proteins" value={item.proteins} onChange={onChangeHandler}/>
            </div> 
            <div>
                <label>Fats</label>
                <input type="number" name="fats" value={item.fats} onChange={onChangeHandler}/>
            </div>
            <div>
                <label>{errors.qty?errors.qty.message:"Quantity"}</label>
                <input type="number" name="qty" value={item.qty} onChange={onChangeHandler}/>
                <select name="measurement" value={item.measurement} onChange={onChangeHandler}>
                    <option>Select One</option>
                    <option value={"g"}>Gram</option>
                    <option value={"oz"}>Ounces</option>
                </select>
            </div>
            
            <button type="submit">{buttonText}</button>
        </form>
        </>
    )
}
export default CreateItem;