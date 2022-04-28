import React, {useState} from 'react'

// COMPONENT
import FormInput from '../form-input/form-input.component';
import FormBtn from '../form-submit-btn/form-submit-btn.component';

import './sign-in.style.scss'

export default function SignIn({handleClick}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // connect to database

        setEmail('');
        setPassword('');
    }

    const handleChange = event => {
        const { value, name } = event.target;

        if(name === 'email'){
            setEmail(value)
        }else{
            setPassword(value)
        }
    }

  return (
    <div className='sign-in'>
        <h1 className="sign-in__heading">sign in to your account</h1>
        <form onSubmit={handleSubmit} className="form-group">
            <FormInput
                name='email'
                type='email'
                handleChange={handleChange}
                value={email}
                label='Email'
                required
            />
            <FormInput
                name='password'
                type='password'
                handleChange={handleChange}
                value={password}
                label='Password'
                required
            />
            <div className="btn-group">
                <FormBtn type='submit'>sign in</FormBtn>
            </div>
        </form>
        {/* <Link to='/sign-up' onClick={handleClick} className='create-account-link'>create an accout?</Link> */}
        <a href='#' className='create-account-link' onClick={handleClick} > create an account?</a>
        {/* <span></span> */}
    </div>
  )
}
