import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProducts from '../components/home/CardProducts'
import CategoryFilter from '../components/home/CategoryFilter'
import FilterPrice from '../components/home/FilterPrice'
import InputSearch from '../components/home/InputSearch'
import OrderByPrice from '../components/home/OrderByPrice'
import { getAllProducts } from '../store/slices/products.slice'
import './styles/home.css'

const Home = () => {

    const products = useSelector(state => state.products)
    const dispatch = useDispatch()

    const [inputText, setInputText] = useState('')
    const [filterByText, setFilterByText] = useState()
    const [filterByPrice, setFilterByPrice] = useState({
        from: 0,
        to: Infinity
    })

    useEffect(() => {
        dispatch(getAllProducts())
    },[])

    /* console.log(products) */
    useEffect(() => {
        if(inputText != '' && products){
            setFilterByText(
                products.filter(product => {
                   return product.title.toLowerCase().trim().includes(inputText)
                })
            )
        } else {
            setFilterByText(products)
        }
    },[inputText, products])
    console.log(filterByText)

    const callBackFilterPrice = (product) => {
        return +product.price > filterByPrice.from && +product.price <= filterByPrice.to
    }
  return (
    <main className='home'>
        <aside>
            <FilterPrice setFilterByPrice={setFilterByPrice}/>
            <hr />
            <CategoryFilter />
            <hr />
            <OrderByPrice />
        </aside>
        <div className="home__container">
        <InputSearch setInputText={setInputText} inputText={inputText}/>
            <ul className='products-list'>
                {
                    
                filterByText?.filter(callBackFilterPrice).map(product => (
                    <CardProducts
                        key={product.id}
                        product={product}
                    />
                ))
                }

            </ul>
        </div>
    </main>
  )
}

export default Home