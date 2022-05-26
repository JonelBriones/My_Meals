import React, {useState,useEffect} from 'react'
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    const [food,setFood] = useState([])
    useEffect(()=> {

        axios.get("http://localhost:8000/api/items")
            .then((res)=>{
                console.log(res.data)
                setFood(res.data)
            })
            .catch((err)=>console.log(err))
    },[])
    return (
        <>
        <h1>Home</h1>
        <Link to={"/add"}><button>Add Product</button></Link>
        <Link to={"/macro_calculator"}><button>Macro Calculator</button></Link>

        <h1>All Products</h1>
        {
            food.map((item)=>(
                <div key={item._id}>
                    <p>{item.name}</p><span>| {item.carbs}g Carbs | {item.proteins}g Proteins | {item.fats}g Fats |</span>
                    
                </div>
            ))
        }
        <h1>Items</h1>

        </>
    )
}
export default Home;