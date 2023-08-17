import React, { useState } from 'react'
import { useAppContext } from '../contexts/ContextProvider'
import { Outlet } from 'react-router';
import ProfileCard from './ProfileCard';

export default function Header() {
  const { userDetails } = useAppContext();
  const [card, setCard] = useState(true);


  if (userDetails === '') {
    return <div>
      Unauthorised
    </div>
  } else {
    return <div>
      <div className='headerContainer'>
        <div className='logoHolder'>
          LOGO
        </div>
        <div className='userDetails'>
          <div className='nameContainer'>
            {userDetails.user.name}
          </div>
          <div className='profileImageContainer' onClick={() => {
            setCard((card) => !card);
          }}>
            <img src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" alt='ProfileImage' />
          </div>
          {card ? "" : <ProfileCard setCard={setCard} />}
        </div>
      </div>
      <Outlet />
    </div>
  }
}