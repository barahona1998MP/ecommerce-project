import React from 'react'
import './styles/inputSearch.css'
const InputSearch = ({setInputText, inputText}) => {
    const handleChange = ( e ) => {
        setInputText(e.target.value)
    }
  return (
    <div className="search-box">
      <form className='search-box__form'>
        <input id='search' className='form__input' value={inputText} onChange={handleChange} type="text" placeholder='What are you looking for?'/>
      </form>
    </div>
  )
}

export default InputSearch