import { createContext, useState } from "react";
import {useNavigate} from 'react-router-dom';
import jwt_decode from 'jwt-decode';


// Creating context
const Authcontext = createContext()

// exporting provider function
export const AuthProvider = ({children}) => {

    // using usestate 
    const [user, setUser] = useState( () => localStorage.getItem('token') ? jwt_decode(localStorage.getItem('token')): null )
    const [token, setToken] = useState(() => localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')): null )

    const navigate = useNavigate()

    //  login function
    const loginUser = async(e ) => {
        e.preventDefault()
        // requesting the site and sending our credentials.
        const response = await fetch('https://django-server-production-d333.up.railway.app/account/token/',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
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


    const logoutUser = () => {
        setToken(null)
        setUser(null)
        localStorage.removeItem('token')
    }

    // function to get context
    const contextData =  {
        user:user,
        loginUser:loginUser,
        logoutUser:logoutUser
    }

    // returing values which we get
    return (
        <Authcontext.Provider value={contextData}>
            {children}
        </Authcontext.Provider>
    )
}



// exporting authcontext
export default Authcontext