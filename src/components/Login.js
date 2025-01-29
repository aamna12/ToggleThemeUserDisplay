import React,{useState,useContext} from 'react';
import { AppContext } from '../context/AppContext';

function Login() {

    const {setUser}=useContext(AppContext);
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    const handleLogin=(e)=>{
        e.preventDefault();
        setUser({username,password})
    }

  return (
    <div className='mt-[30px]'>
      <h1 className='font-bold text-[34px] text-center underline text-blue-400'>LOGIN</h1>
      <div className='flex flex-col justify-center items-center font-bold'>
        <div>
        <label htmlFor='username'>Username</label>
        <input type="text" id="username" className='m-5 w-[300px] p-2 rounded-md text-black font-sm
        border-2 border-blue-900 focus:border-2 focus:border-blue-900'
        value={username} onChange={(e)=>setUsername(e.target.value)}/>
        </div>
        <div>
        <label htmlFor='password'>Password</label>
        <input type="password" id="password" className='m-5 w-[300px] p-2 rounded-md text-black font-sm
        border-2 border-blue-900 focus:border-2 focus:border-blue-900'
        value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button onClick={handleLogin}
        className='border-2 border-blue-900 p-2 rounded-xl w-[100px] hover:scale-110'>
            Login</button>
      </div>
    </div>
  )
}

export default Login
