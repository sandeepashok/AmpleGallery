import React from 'react';
import Brightness4RoundedIcon from '@material-ui/icons/Brightness4Rounded';
import SignOut from './Signout';

function Title({ darkModeHandler }) {
  return (
    <div className="title">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>AmpleGallery</h1>
        <div className='theme-logout'>
          <Brightness4RoundedIcon className='theme-btn' onClick={darkModeHandler} />
          <SignOut />
        </div>
      </div>
      <h2>Your Library</h2>
      <p>Feel free to click and drop some images!</p>
    </div>
  )
}

export default Title;