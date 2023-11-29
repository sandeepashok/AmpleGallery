import React from 'react'
import { GoogleAuthProvider, auth, signInWithPopup } from '../firebase/config'

export default function Signin() {

  const signInWithGoogle = () => {

    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)

  }
  return (
    <div className='signin-container'>

      <div className='signin-page'>

        <img src='/gallery.svg' alt='messenger-icon' className='brand-logo' />

        <h1>AmpleGallery</h1>

        <h4>Sign In with Google, upload your photos and cherish your memories.</h4>

        <button onClick={signInWithGoogle} className='signin-btn'>
          <img src='/google.png' alt='google-img' className='google-img' />
          <span className='btn-name'>Sign in with Google</span>
        </button>
      </div>

    </div >
  )
}