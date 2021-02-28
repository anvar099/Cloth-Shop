import React, { useState } from "react";
import axios from 'axios';
import { 
  Container,
  Content,
  Title,
  Subtitle,
  Form,
  Input,
  LabelContent,
  Label
} from './styles'

import Button from "../Buttons"

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Post request
  const handleSubmit = (e) => {
    e.preventDefault()
    axios('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(res => {
      console.log(res, "res")
    })
    .catch(err => {
      console.log(err, "err")
    })
  }

  // handle onChange
  const handleName = (e) => {
    e.persist()
    setName(e.target.value)
  }

  const handleEmail = (e) => {
    e.persist()
    setEmail(e.target.value)
  }


  return (
    <Container>
      <Content>
        <Title text22 weight500>I already have an account</Title>
        <Subtitle >Sign in with your email and password</Subtitle>
        <Form onSubmit={handleSubmit}>
          <LabelContent>
            <Label className="label">Email</Label>
            <Input name="email" type="email" onChange={handleName}/>
          </LabelContent>
          <LabelContent>
            <Label className="label">Password</Label>
            <Input name="password" type="password" onChange={handleEmail}/>
          </LabelContent>
         
          <Button formBtn>Sign Up</Button>
        </Form>
      </Content>
      <Content>
        <Title text22 weight500>I do not have an account</Title>
        <Subtitle>Sign in with your email and password</Subtitle>
        <Form onSubmit={handleSubmit}>
          <LabelContent>
            <Label className="label">Display Name</Label>
            <Input name="name" type="text" onChange={handleName}/>
          </LabelContent>
          <LabelContent>
            <Label className="label">Email</Label>
            <Input name="email" type="email" onChange={handleEmail}/>
          </LabelContent>
          <LabelContent>
            <Label className="label">Password</Label>
            <Input name="password" type="password"/>
          </LabelContent>
          <LabelContent>
            <Label className="label">Confirm Password</Label>
            <Input name="password" type="password"/>
          </LabelContent>
          
          <Button formBtn>Sign In</Button>
        </Form>
      </Content>
    </Container>
  )
}

export default SignUp;