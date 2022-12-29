import { createContext, useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import jwt_decode from 'jwt-decode';


// Creating context
const Authcontext = createContext()

// exporting provider function
export const AuthProvider = ({children}) => {


    // using usestate 
    const [user, setUser] = useState( () => localStorage.getItem('token') ? jwt_decode(localStorage.getItem('token')): null )
    const [token, setToken] = useState(() => localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')): null )
    const [loading, setloading] = useState(true)

    // Importing Navigate
    const navigate = useNavigate()



    //  login function
    const loginUser = async(e ) => {
        // Preventing to make request when blank submit
        e.preventDefault()
        // requesting the site and sending our credentials.
        const response = await fetch('https://django-server-production-d333.up.railway.app/account/token/',{
                method:"POST",
                headers:{'Content-Type':'application/json',},
                body:JSON.stringify({"username":e.target.username.value, "password":e.target.password.value})
            })
            
            const data = await response.json()
            // checking conditions.
            if (response.status === 200){
                setToken(data)
                setUser(jwt_decode(data.access))
                localStorage.setItem('token', JSON.stringify(data))
                navigate('/')
            }else{
                alert('Something went wrong!')
            }
        }
    
    // update token function
    const refresh_token = async(e) => {
        const response = await fetch('https://django-server-production-d333.up.railway.app/account/token/refresh/',{
                    method:"POST",
                    headers:{'Content-Type':'application/json',},
                    body:JSON.stringify({'refresh':token.refresh})})
        const data = await response.json()
        // checking conditions.
        if (response.status === 200){
            setToken(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('token', JSON.stringify(data))
        }else{logoutUser()}
        }


    // Logout function
    const logoutUser = () => {
        setToken(null)
        setUser(null)
        localStorage.removeItem('token')
    }

    // function to get context
    const contextData =  {
        user:user,
        token:token,
        loginUser:loginUser,
        logoutUser:logoutUser,
    }

    // using useeffect to call refresh token
    useEffect(() => {
        const fourmins = 5000 
        const interval = setInterval(() => {
            if(token){
                refresh_token()
            }}, fourmins)
        return ()=> clearInterval(interval)
    },[token,loading])


    // returing values which we get
    return (
        <Authcontext.Provider value={contextData}>
            {children}
        </Authcontext.Provider>
    )
}



// exporting authcontext
export default Authcontext