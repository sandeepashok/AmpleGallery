import React from 'react'
import { auth } from '../firebase/config'

export default function SignOut() {
  return auth.currentUser && (

    <button className='signout-btn' onClick={() => auth.signOut()}>Sign Out</button>

  )
}