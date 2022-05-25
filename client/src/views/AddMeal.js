import React, {useState,useEffect} from 'react'
import axios from "axios";
import CreateMeal from "../components/CreateMeal";
import { useNavigate, Link } from 'react-router-dom';
const AddMeal = () => {
    const navigate = useNavigate()
    const [errors,setErrors] = useState({})
    const [meal,setMeal] = useState([{
        carbs: "",
        proteins: "",
        fats: "",
        name: "",
        qty: "",
        measurement: ""

    }])
    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/meal",meal)
            .then((res)=>{
                console.log(res.data)
                setMeal({
                    carbs: "",
                    proteins: "",
                    fats: "",
                    name: "",
                    qty: "",
                    measurement: "",
                })
                setErrors({})
                navigate("/home")
            })
            .catch((err)=>{
                console.log(err)
                setErrors(err.response.data.errors)
            })
    }
    const onChangeHandler = (e) => {
        const newMeal = {...meal}
        newMeal[e.target.name] = e.target.value;
        console.log(newMeal)
        setMeal(newMeal)
    }
    return (
        <>
        <Link to={"/home"}><button>Go Back</button></Link>
        <CreateMeal
        meal={meal}
        onChangeHandler={onChangeHandler}
        onSubmitHandler={onSubmitHandler}
        errors={errors}
        buttonText={"Add"}
        />
        </>
    )
}
export default AddMeal;