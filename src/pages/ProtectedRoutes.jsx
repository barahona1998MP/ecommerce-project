import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    
    const hasToken = localStorage.getItem('token')
    if(hasToken) {
        return <Outlet />
    } else {
        return <Navigate to='/login' />
    }
}

export default ProtectedRoutes