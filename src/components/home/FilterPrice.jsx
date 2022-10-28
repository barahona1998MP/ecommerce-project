import React from 'react'
import './styles/filterPrice.css'
const FilterPrice = ({setFilterByPrice}) => {
    const handlesubmit = (e) => {
        e.preventDefault()
        const from = +e.target.from.value
        const to = +e.target.to.value
        const obj = {
            from: from,
            to: to !== 0 ? to : Infinity
        }
        setFilterByPrice(obj)
    }
  return (
    <form className='price-filter' onSubmit={handlesubmit}>
        <h3 className='price-filter__title'>Price</h3>
        <div className='price-filter__container'>
            <label htmlFor="from">From</label>
            <input type="text" id='from' className='price-filter__from'/>
        </div>
        <div className='price-filter__container'>
            <label htmlFor="to">To</label>
            <input type="text" id='to' className='price-filter__to'/>
        </div>
        <button className='filter-price__btn'>Filter</button>
    </form>
  )
}

export default FilterPrice