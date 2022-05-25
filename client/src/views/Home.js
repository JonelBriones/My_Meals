import React, {useState,useEffect} from 'react'
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
const Home = () => {
    const [food,setFood] = useState([])
    useEffect(()=> {

        axios.get("http://localhost:8000/api/meals")
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
        <h1>All Products</h1>
        {
            food.map((item)=>(
                <div key={item._id}>
                    <p>{item.name}</p>
                </div>
            ))
        }
        <h1>Meals</h1>
        
        </>
    )
}
export default Home;