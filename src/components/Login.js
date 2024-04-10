import React,{useState} from 'react';
import axios from 'axios'
import {useNavigate,Link} from 'react-router-dom'

function Login(){
    const [email,setEmail]=useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            await axios.post('http://localhost:8001/',{email,password})
            .then((res)=>{
                if(res.data=='exist'){
                    navigate('/home',{state:{id:email}})
                }
                else if(res.data="notexist"){
                    alert('User have not Sign up')
                }
            })
            .catch(e=>{
                alert('Wrong details')
                console.log(e)
            })
        }
        catch(e){
            console.log(e)
        }
    }   
    return(
        <div>
            <h1>Login Page</h1>
            <form action='post'>
                <input type='email' placeholder='Enter email' 
                    onChange={(e)=>setEmail(e.target.value)} /><br /><br />
                <input type='password' placeholder='Enter Password'
                    onChange={(e)=>setPassword(e.target.value)} /><br /><br />
                <input type='submit' onClick={handleSubmit} />
            </form>
            <br /><br />
            <p>OR</p>
            <br /><br />
            <Link to='/signup'>Signup</Link>
        </div>
    )
}

export default Login;