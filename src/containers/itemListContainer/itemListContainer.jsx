import './itemListContainer.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ItemListContainer =({categoria})=>{
  const [products, setProducts] = useState([])
  const { id_categoria } = useParams()
  
  useEffect(() => {
    if(id_categoria===undefined){
      fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=> setProducts(json))
      .catch(e=> console.error(e))      
    }else{
      fetch(`https://fakestoreapi.com/products/category/${id_categoria}`)
      .then(res=>res.json())
      .then(json=> setProducts(json))
      .catch(e=> console.error(e))
    }
  }, [categoria])
  

    return(
      <div>
        {products.map((product)=> <p key={product.id}>{product.title}</p> )}
      </div>
    )
}
export default ItemListContainer
