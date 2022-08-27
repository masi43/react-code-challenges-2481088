import { useState } from 'react'

export default function FormValidator () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const getValidationString = function(emailArg, pwdArg, pwdConfrimArg) {
    if(emailArg.length === 0 || pwdArg.length === 0 || pwdConfrimArg.length === 0) {
      return 'please enter email/password/password confirmation'
    } 
    const emailSymbolArr = emailArg.split('').filter((alphabet) => (alphabet === '@'))
    if(emailSymbolArr.length === 0 || emailSymbolArr.length > 1) {
      return 'email should contain one and only one @ symbol'
    } 

    if(pwdArg.length < 8) {
      return 'password should be atleast 8 characters long'
    }

    if(pwdArg !== pwdConfrimArg) {
      return 'password and password confirmation must be same'
    }

    return 'success';
  }
  const handleSubmit = function(event) {
    event.preventDefault()
    
    setErrorMessage(getValidationString(email, password, passwordConfirm))
}
  return (
    <>
    <form onSubmit={handleSubmit}>
      <h2>Sign Up!</h2>
      <label htmlFor='email'>Email</label>
      <input
        type='text' name='email'
        onChange={e => setEmail(e.target.value)}
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password' name='password'
        onChange={e => setPassword(e.target.value)}
      />
      <label htmlFor='password-confirm'>Confirm Password </label>
      <input
        type='password' name='password-confirm'
        onChange={e => setPasswordConfirm(e.target.value)}
      />
      <input type='submit' value='Submit' />
    </form>
    <p> {errorMessage} </p>
    </>
  )
}
