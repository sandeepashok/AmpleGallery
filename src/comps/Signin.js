import React from 'react'
import { auth, firebase } from '../firebase/config'

export default function Signin() {

  const signInWithGoogle = () => {

    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider)

  }
  return (
    <div className='signin-container'>

      <div className='signin-page'>

        <img src='https://image.flaticon.com/icons/png/512/4507/4507734.png' alt='messenger-icon' className='brand-logo' />

        <h1>AmpleGallery</h1>

        <h4>Sign In with Google, upload your photos and cherish your memories.</h4>

        <button onClick={signInWithGoogle} className='signin-btn'>
          <img src='https://image.flaticon.com/icons/png/512/2702/2702602.png' alt='google-img' className='google-img' />
          <span className='btn-name'>Sign in with Google</span>
        </button>
      </div>

    </div >
  )
}