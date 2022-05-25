import React, {useState,useEffect} from 'react'

const CreateMeal = (props) => {
    const {meal,onChangeHandler,onSubmitHandler,buttonText,errors} = props;
    return (
        <>
        <h1>My Meals</h1>
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>{errors.name?errors.name.message:"Product Name"}</label>
                <input type="text" name="name" value={meal.name} onChange={onChangeHandler} />
            </div>

            <div>
                <label>Carbs</label>
                <input type="number" name="carbs" value={meal.carbs} onChange={onChangeHandler}/>
            </div>
            <div>
                <label>Proteins</label>
                <input type="number" name="proteins" value={meal.proteins} onChange={onChangeHandler}/>
            </div> 
            <div>
                <label>Fats</label>
                <input type="number" name="fats" value={meal.fats} onChange={onChangeHandler}/>
            </div>
            <div>
                <label>{errors.qty?errors.qty.message:"Quantity"}</label>
                <input type="number" name="qty" value={meal.qty} onChange={onChangeHandler}/>
                <select name="measurement" value={meal.measurement} onChange={onChangeHandler}>
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
export default CreateMeal;