import React from 'react'
import './styles/cardPurchase.css'
const CardPurchase = ({purchase, total}) => {
    console.log(purchase)
    
  return (
    <article className='card-purchase'>
        <header className='card-purchase__date'>{purchase.updatedAt}</header>
        <div>
            {
                purchase.cart.products.map(product => (
                    <section className='card-purchase__section'>
                        <h3 className='card-purchase__title'>{product.title}</h3>
                        <div className='card-purchase__quantity'><span className='card-purchase__span'>Quantity:</span>{product.productsInCart.quantity}</div>
                        <div className='card-purchase__price'><span className='card-purchase__span'>Price:</span>${product.price}</div>
                    </section>
                ))
                
            }
        </div>
    </article>
  )
}

export default CardPurchase