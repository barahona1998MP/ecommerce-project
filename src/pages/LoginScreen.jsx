import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form'
import './styles/loginScreen.css'
const LoginScreen = () => {
    const {register, handleSubmit, reset} = useForm()
    const [isLogged, setIsLogged] = useState(false)

    const submit = (data) => {
        console.log(data)
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/users/login`
        axios.post(URL, data)
            .then(res => { 
                console.log(res.data)
                localStorage.setItem('token', res.data.data.token)
                setIsLogged(true)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        if(localStorage.getItem('token')) {
            setIsLogged(true)
        } else {
            setIsLogged(false)
        }
    },[])

    const handleLogout = () => {
        localStorage.removeItem('token')
        setIsLogged(false)
    }
    if(isLogged) {
        return (
            <div className='container-logout'>
                <h2 className='form-logout'>User Logged ✅</h2>
                <div className='container-icon__logout'>
                    <i class="fa-regular fa-user form-icon__logout"></i>
                </div>
                <button className='form-login__logout' onClick={handleLogout}>Logout</button>
            </div>
        )
    }
    
  return (
    <div className='container-login'>
        <form className='form-login' onSubmit={handleSubmit(submit)}>
            <h2 className='form-login__title'>Welcome, enter your email and password to continue</h2>
            <div className='form-login__content'>
                <input className='form-login__input' placeholder='Enter your email' {...register('email')} type="email"  id='email'/>
            </div>
            <div className='form-login__content'>
                <input className='form-login__input' placeholder='Enter your password'{...register('password')} type="password"  id='password'/>
            </div>
            <div className='container-btn'>
                <button className='form-login__btn'>Login</button>
            </div>
        </form>
    </div>
  )
}

export default LoginScreen