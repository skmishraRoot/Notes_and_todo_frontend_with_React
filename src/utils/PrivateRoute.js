//  In react router v6 we use outlet and navigate to make aprivate route
import { useContext } from 'react'
import {Outlet, Navigate } from 'react-router-dom'
import Authcontext from '../context/AuthContext'


const PrivateRoutes = () => {
    const {user} = useContext(Authcontext)

    return (
        user ? <Outlet/> : <Navigate to='/login' />
    )
}

export default PrivateRoutes