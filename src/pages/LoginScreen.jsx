import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form'
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
            <div>
                <h2>User Logged 👍</h2>
                <button onClick={handleLogout}>Logout</button>
            </div>
        )
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit(submit)}>
            <h2>Welcome, enter your email and password to continue</h2>
            <div>
                <label htmlFor="email">Email</label>
                <input {...register('email')} type="email"  id='email'/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input {...register('password')} type="password"  id='password'/>
            </div>
            <button>Login</button>
        </form>
    </div>
  )
}

export default LoginScreen