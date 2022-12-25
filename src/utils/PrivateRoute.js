//  In react router v6 we use outlet and navigate to make aprivate route
import {Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    let auth = {'token':false}

    return (
        auth.token ? <Outlet/> : <Navigate to='/login' />
    )
}

export default PrivateRoutes