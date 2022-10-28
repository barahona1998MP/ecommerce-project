import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductInfo from '../components/productId/ProductInfo'
import SimilarProduct from '../components/productId/SimilarProduct'
import SliderImg from '../components/productId/SliderImg'
import './styles/productId.css'
const ProductId = () => {
  const {id} = useParams()
  const [product, setProduct] = useState()
  useEffect(() =>{
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
    axios.get(URL)
    .then(res => setProduct(res.data.data.product))
    .catch(err => console.log(err))
  },[id])
  

  return (
    <div className='contenedor'>
      <div className="product-info-flex">
        { 
          product && <SliderImg product={product}/>
        }
      <ProductInfo product={product}/>
      </div>
      <SimilarProduct product={product}/>
    </div>
  )
}

export default ProductId