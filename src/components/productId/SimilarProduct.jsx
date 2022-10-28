import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardProducts from '../home/CardProducts'
import './styles/similarProduct.css'
const SimilarProduct = ({product}) => {
    const [categories, setCategories] = useState()
    const [idCategory, setIdCategory] = useState()
    const [similarProducts, setSimilarProducts] = useState()
    /* categories */
    useEffect(() => {
      const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/categories`
      axios.get(URL) 
        .then(res => setCategories(res.data.data.categories))
        .catch(err => console.log(err))
    },[])

    useEffect(() => {
        if(categories && product) {
            const cb = category => category.name === product.category
            setIdCategory(categories.filter(cb)[0].id)
        }
    },[categories, product])

    useEffect(() => {
        if(idCategory) {
            const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${idCategory}`
            axios.get(URL)
                .then(res => setSimilarProducts(res.data.data.products))
                .catch(err => console.log(err))
        }
    },[idCategory])

    console.log(similarProducts)
    
  return (
    <div className='similiar-product'>
        <h2 className='similiar-product__title'>Discover similar products</h2>
        <ul className='products-list'>
            {
                similarProducts?.map(prod => {
                    if(product.id !== prod.id) {
                        return <CardProducts 
                            key={prod.id}
                            product={prod}
                            />
                    }
                })
            }

        </ul>
    </div>
  )
}

export default SimilarProduct