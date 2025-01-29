import React,{useContext} from 'react'
import { AppContext } from '../context/AppContext'
import Login from "./Login";
import Profile from "./Profile";

function Navbar() {

    const {theme,setTheme,user} = useContext(AppContext);

    const toggleTheme=(e)=>{
        e.preventDefault();
        setTheme((prev)=>prev==="light"?"dark":"light");
    }

  return (
    <div className={`h-screen ${theme === "light" ? "bg-white" : "bg-black"}
    ${theme === "light" ? "text-black" : "text-white"}`}>
        <div className='w-full flex justify-between items-center'>
        <h3 className='m-3 font-bold text-lg'>My App</h3>
        <button onClick={toggleTheme} className='m-3 border-4 border-blue-900 p-3 rounded-xl font-bold
        hover:scale-105'>
        Toggle Theme</button>
        </div>
        <hr />
        <div>
            {
                user ? <Profile /> :
                <Login />
            }
        </div>
    </div>
  )
}

export default Navbar
