

import { useEffect, useState } from "react"
import "./Navbar.css"
import axios from "axios"
import {  useParams } from "react-router-dom";

export const Productdetail=()=>{
    const[data,setData]=useState([]);
    const[loading,setLoading]=useState(true)
    const[error,setError]=useState(false)
    const param=useParams()
    console.log(param)

    useEffect(()=>{
        const{id}=param
        setLoading(true)
      loaddata(id)
      .then((res)=>setData(res.data),setLoading(false)).catch((err)=>setError(true))
       
    },[param.id])
  
    const loaddata=async(id)=>{
     return await axios(`https://fakestoreapi.com/products/${id}`,{
         method:"GET"
     })
    }
  console.log(data)
    return (
        <div className="product">
            {loading && <div>...loading</div>}
            {error&& <div>....Error</div>}
            <div>
                       <img src={data.image} alt="product"/>
                        <p>{data.title}</p>
                        <p>{data.price}</p>
                        <p>{data.description}</p>
                        <p>Rating-{data?.rating?.rate}</p>
                   </div>
                
                  
                           
        </div>
    )
}