import React, {useState,useEffect} from 'react'
import axios from "axios";
import CreateItem from "../components/CreateItem";
import { useNavigate, Link } from 'react-router-dom';
const AddItem = () => {
    const [exist,setExist] = useState("")
    const navigate = useNavigate()
    const [errors,setErrors] = useState({})
    const [item,setItem] = useState([{
        carbs: "",
        proteins: "",
        fats: "",
        name: "",
        qty: "",
        measurement: ""

    }])
    const [itemExist,setItemExist] = useState([])
    useEffect(()=> {

        axios.get("http://localhost:8000/api/items")
            .then((res)=>{
                console.log(res.data)
                setItemExist(res.data)
            })
            .catch((err)=>console.log(err))
    },[])
    const onSubmitHandler = (e) => {
        e.preventDefault()
        const foodExist = itemExist.find((oneItem)=>item.name === oneItem.name)
        console.log("Duplicate",item.name)
        if(foodExist) {
            // setItem({name:""})
            return setExist("This product has already been added!")
        } else setExist("")
        axios.post("http://localhost:8000/api/item",item)
            .then((res)=>{
                console.log(res.data)
                setItem({
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
        const newItem = {...item}
        newItem[e.target.name] = e.target.value;
        console.log(newItem)
        setItem(newItem)
    }

    return (
        <>
        <Link to={"/home"}><button>Go Back</button></Link>
        <CreateItem
        item={item}
        onChangeHandler={onChangeHandler}
        onSubmitHandler={onSubmitHandler}
        errors={errors}
        buttonText={"Add"}
        exist={exist}
        />
        </>
    )
}
export default AddItem;