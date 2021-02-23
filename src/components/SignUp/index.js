import React from "react"
import { 
  Input, 
  SignupContainer,
  SignUpContent,
  SignUpRow,
  SignUpTitle,
  SignUpSubtitle,
  FormSignUp,
  ButtonSignUp
} from './styles'


const SignUp = () => {

  // Post request
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  // handle onChange
  const handleChange = (e) => {
    e.persist()
  }

  return (
    <SignupContainer>
      <SignUpContent>
        <SignUpRow>
          <SignUpTitle>I already have an account</SignUpTitle>
          <SignUpSubtitle>Sign in with your email and password</SignUpSubtitle>
          <FormSignUp onSubmit={handleSubmit}>
            <Input name="email" type="email" onChange={handleChange} placeholder="Email" />
            <Input name="password" type="password" onChange={handleChange} placeholder="Password" />
            <ButtonSignUp>Sign In</ButtonSignUp>
          </FormSignUp>
        </SignUpRow>
        <SignUpRow>
          <SignUpTitle>I do not have an account</SignUpTitle>
          <SignUpSubtitle>Sign in with your email and password</SignUpSubtitle>
          <FormSignUp onSubmit={handleSubmit}>
            <Input name="name" type="text" onChange={handleChange} placeholder="Display Name" />
            <Input name="email" type="email" onChange={handleChange} placeholder="Email" />
            <Input name="password" type="password" onChange={handleChange} placeholder="Password" />
            <Input name="password" type="password" onChange={handleChange} placeholder="Confirm Password" />
            <ButtonSignUp>Sign Up</ButtonSignUp>
          </FormSignUp>
        </SignUpRow>
      </SignUpContent>
    </SignupContainer>
  )
}

export default SignUp;