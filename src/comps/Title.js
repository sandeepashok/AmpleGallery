import React, { useState } from 'react';
import Brightness4RoundedIcon from '@material-ui/icons/Brightness4Rounded';

function Title() {

  const [isDark, setIsDark] = useState(true)

  const darkModeHandler = (e) => {
    setIsDark(!isDark)
    if (isDark) {
      document.body.className = 'dark';
    } else {
      document.body.className = 'light';
    }
  }

  return (
    <div className="title">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>AmpleGallery</h1>
        <Brightness4RoundedIcon style={{ marginTop: '25px', cursor: 'pointer' }} onClick={darkModeHandler} />
      </div>
      <h2>Your Library</h2>
      <p>Feel free to click and drop some images!</p>
    </div>
  )
}

export default Title;