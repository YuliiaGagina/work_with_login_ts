import { useDispatch } from 'react-redux';
import { login } from 'redux/user/operations';
import {SectionWrapper, Form, Title, Input, Label, Button} from './Login.styled';

export const Login = () => {
  const dispatch = useDispatch();
 
   

  const handelSubmit = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    const user = {
      email: email.value,
      password: password.value,
    };
    dispatch(login(user));
   
    
    event.target.reset();
  };
  return (

    <SectionWrapper>
      <Title>Log in and see your all contacts!</Title>
      
    <Form onSubmit={handelSubmit}>
      <Label for="mail">Your Email:</Label>
      <Input type="email" id='mail' name="email" placeholder="Your email"/>
      <Label for="password">Password:</Label>
      <Input type="password" id='password' name="password" placeholder="*******" />
      <Button type="submit">Submit</Button>
    </Form>
   
  
    </SectionWrapper>
  );
};