import React from 'react';
import Brightness4RoundedIcon from '@material-ui/icons/Brightness4Rounded';
import SignOut from './Signout';

function Title({ darkModeHandler, user }) {
  return (
    <div className="title">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>AmpleGallery</h1>
        <div className='theme-logout'>
          <Brightness4RoundedIcon className='theme-btn' onClick={darkModeHandler} />
          <SignOut />
        </div>
      </div  >
      <div className='profile-details' >
        <img alt='profile-pic' src={user.providerData[0].photoURL} className='profile-pic' />
        <h2>{user.providerData[0].displayName}'s Library</h2>
      </div>
      <p> Feel free to click and add some images!</p>
    </div>
  )
}

export default Title;