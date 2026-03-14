import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const email = localStorage.getItem("email")
    const navigate = useNavigate()

    useEffect(() => {
        if (!email) {
            navigate('/login')
        }
    }, [email])

    return children
}

export default ProtectedRoute