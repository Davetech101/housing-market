import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { toast } from 'react-toastify'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import { StAuth } from '../styledComponents/StAuth'

function ForgotPassword() {

  const [email, setEmail] = useState('')
  const onChange = (e) => setEmail(e.target.value)

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success('Email was sent')
    } catch (error) {
      toast.error('Could not send reset email')
    }

    e.target.reset()
  }

  return (
    <StAuth>
      <header>
        <p >Forgot Password</p>
      </header>

        <form onSubmit={onSubmit}>
          <input
            type='email'
            placeholder='Email'
            id='email'
            value={email}
            onChange={onChange}
          />

          <Link to='/sign-in'>
            Sign In
          </Link>

          <button id='submit'>
            <p>Send Reset Link</p>
            <span>
              <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
            </span>
          </button>
        </form>
    </StAuth>
  )

}

export default ForgotPassword