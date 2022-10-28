import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getAllProductsCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import './styles/cartProduct.css'
const CartProduct = ({product}) => {
    
    const dispatch = useDispatch()

    const handleDelete = () => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
        axios.delete(URL, getConfig())
            .then(res => {
                console.log(res.data)
                dispatch(getAllProductsCart())
            })
            .catch(err => console.log(err))
    }

  return (
    <article className='cart-product'>
        <h2 className='cart-product__title'>{product.title}</h2>
        <ul className='cart-product__list'>
            <li className='cart-product__list'><span className='cart-product__span'>Price: </span>{product.price}</li>
            <li className='cart-product__list'><span className='cart-product__span'>Quantity: </span>{product.productsInCart.quantity}</li>
        </ul>
        <button onClick={handleDelete} className='cart-product__btn'>
            <i className="cart-p__icon fa-regular fa-trash-can"></i>
        </button>
    </article>
  )
}

export default CartProduct