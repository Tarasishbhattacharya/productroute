

import { useEffect, useState } from "react"
import "./Navbar.css"
import axios from "axios"
import { Link } from "react-router-dom";

export const Products=()=>{
    const[data,setData]=useState([]);
    const[loading,setLoading]=useState(true)
    const[error,setError]=useState(false)
    useEffect(()=>{
        setLoading(true)
      loaddata()
      .then((res)=>setData(res.data),setLoading(false)).catch((err)=>setError(true))
       
    },[])
  
    const loaddata=async()=>{
     return await axios("https://fakestoreapi.com/products",{
         method:"GET"
     })
    }
  console.log(data)
    return (
        <div className="product">
            {loading && <div>...loading</div>}
            {error&& <div>....Error</div>}
            {data.map((item)=>{
                return (
                   <div>
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                        <Link to={`/products/${item.id}`}>
                            <button>More details</button>
                        </Link>
                   </div>
                )
            })}
        </div>
    )
}