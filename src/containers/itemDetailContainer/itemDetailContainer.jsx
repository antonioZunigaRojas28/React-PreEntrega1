import React, { useEffect, useState } from "react";
import './itemDetailContainer.css'


const ItemDetailContainer =(id_producto) =>{
    const [product, setProduct] = useState()
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id_producto}`)
        .then(res=>res.json())
        .then(json=>setProduct(json))
        .catch(e => console.error(e))
    }, [])


    return(
        <>
            <div className="card">
                <div>{product?.title}</div>
                <div>{product?.category}</div>
                <img src={product?.image} alt="no disponible" />
            </div>
        </>
    )
}

export default ItemDetailContainer