import React, { useEffect, useState } from 'react'
import Login from './login'
import Dashboard from './dashboard'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../../firebase'

const Admin = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=> {
            if(user){
                setLoggedIn(true)
            }
            else{
                setLoggedIn(false)
            }
        })
    }, [])
  return (
    <div>
        {loggedIn ? <Dashboard /> : <Login />}
    </div>
  )
}

export default Admin