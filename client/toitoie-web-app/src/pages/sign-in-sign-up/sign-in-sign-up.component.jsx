import React, {useState} from 'react'

// COMPONENT
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-sign-up.style.scss'

export default function SignInAndSignUp() {

    const [swap, setSwap] = useState(false);

  return (
    <div className='sign-in-sign-up'>
        {
            !swap ?
            <SignIn handleClick = {() => setSwap(true)}/>
            :
            <SignUp handleClick = {() => setSwap(false)}/>
        }
    </div>
  )
}
