import React,{useContext} from 'react';
import { AppContext } from '../context/AppContext';

function Profile() {

    const {user} = useContext(AppContext);

  return (
    <div className='mt-20'>
      <h1 className='text-center font-bold'>Welcome to My App, {user.username}</h1>
    </div>
  )
}

export default Profile
