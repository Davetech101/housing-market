import { useState } from 'react'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import OAuth from '../components/OAuth'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import { StAuth } from '../styledComponents/StAuth'

function SignIn() {

  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { email, password } = formData

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const auth = getAuth()

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      if (userCredential.user) {
        navigate('/profile')
      }
    } catch (error) {
      toast.error('Invalid User Credentials')
    }
  }

  return (
    <StAuth>
      <header>
        <p>Welcome Back!</p>
      </header>

      <form onSubmit={onSubmit}>
        <input
          type='email'
          placeholder='Email'
          id='email'
          value={email}
          onChange={onChange}
        />

        <aside>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            id='password'
            value={password}
            onChange={onChange}
          />

          <img
            src={visibilityIcon}
            alt='show password'
            onClick={() => setShowPassword((prevState) => !prevState)}
          />

          <Link to='/forgot-password'>
            Forgot Password
          </Link>
        </aside>



        <button id='submit'>
          <p>Sign In</p>
          <span>
            <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
          </span>
        </button>
      </form>

      <OAuth />

      <Link to='/sign-up'>
        Sign Up Instead
      </Link>
    </StAuth>
  )

}

export default SignIn