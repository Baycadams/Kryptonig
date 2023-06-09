import React, {useState} from 'react';
import { auth } from '../../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


const Login = ()=>{
        const [username, setUsername] = useState('')
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [newUser, setNewUser] = useState(false)
        const [error,setError] = useState(false)
        const [signUp, setSignUp] = useState('Sign Up')
        const [logIn, setLogIn] = useState('Log In')


        const submit= (e) => {
            e.preventDefault() 
            setError(false)
            

            if(newUser){
                setSignUp('Signing Up...')
                createUserWithEmailAndPassword(auth, email, password)
                .then(()=>{
                    
                    localStorage.setItem("username", username)
                   
                })
                .catch((error)=>{
                    setError(true)
                    alert(error.message)
                })
                
            }
            else{
                setLogIn('Logging In...')
                signInWithEmailAndPassword(auth, email, password)
                
                .catch((error)=>{
                    setError(true)
                    alert(error.message)
                    setLogIn('Log In')
                })
                
            }
        }
        return(
            <div className='login-form'>
        
             
               <div className="contain">
               <img src="/images/KRYPTONIG-ICON - Copy (2).png" alt="kryptonig-icon"/>
               {newUser ? <h3>Sign up here 😉</h3> : <h3>Welcome Admin 😉</h3> }
                
                <form onSubmit={submit}>
                    {newUser && <div className='input'><input type="username" id="username" required placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}  /></div> }
                    
                    <div className='input'><input type="email" id="email" required placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}  /></div>
                    <div className='input'><input type="password" id="password" required placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}  /></div>
                    <button type='submit' >{newUser ? signUp : logIn}</button>
                    {error && <p className='error'>An error has been detected</p>}
                    
                    {newUser ? 
                    <span className="user-stat">
                    Already have an account? <b onClick={()=>{setNewUser(!newUser) 
                        setError(false)}}>Log In</b> 
                    </span>
                    :
                    <span className="user-stat">
                        Don't have an account? <b onClick={()=>{setNewUser(!newUser) 
                            setError(false)}}>Sign Up</b> 
                    </span>
                    }
                    

                    
                </form>
                
                <small></small>
           </div>
        
            </div>
        )
    
    }

    
export default Login