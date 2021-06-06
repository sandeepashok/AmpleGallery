import React, { useState } from 'react';
import Signin from './comps/Signin'
import ImageGrid from './comps/imageGrid';
import ImgPopUp from './comps/modal';
import Title from './comps/Title';
import UploadForm from './comps/uploadForm';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/config'

function App() {

  const [selectedImg, setSelectedImg] = useState(null)
  const [user] = useAuthState(auth)
  let [isDark, setIsDark] = useState(false)

  const darkModeHandler = (e) => {
    setIsDark(!isDark)
    isDark ? document.body.className = 'light' : document.body.className = 'dark'
  }

  return (
    <div className="App">
      {user ? <div className='image-display-section'>
        <Title darkModeHandler={darkModeHandler} user={user} />
        <UploadForm />
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && <ImgPopUp selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
      </div > : <Signin />}
    </div>
  );
}

export default App;
