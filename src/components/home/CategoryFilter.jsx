import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProducts, getProductsByCategory } from '../../store/slices/products.slice'
import './styles/categoryFilter.css'

const CategoryFilter = () => {
    const [categories, setCategories] = useState()

    useEffect(() => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
        axios.get(URL)
            .then(res => setCategories(res.data.data.categories))
            .catch(err => console.log(err))
    },[])
    console.log(categories)

    const dispatch = useDispatch()
    const handleFetchCategory = (id) => {
        if(id) {
            /* Petición de filtro por categoria */
            dispatch(getProductsByCategory(id))
        } else {
            /* filtrar todos los productos */
            dispatch(getAllProducts())
        }
    }
  return (
    <article className='filter-category'>
        <h3 className='filter-category__title'>Category</h3>
        <ul className='filter-category__list'>
            <li onClick={() => handleFetchCategory()}>All products</li>
            {
                categories?.map(category => (
                    <li key={category.id}
                        onClick={() => handleFetchCategory(category.id)}
                    >{category.name}</li>
                ))
            }
        </ul>
    </article>
  )
}

export default CategoryFilter