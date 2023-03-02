import { useDispatch } from 'react-redux';
import { register } from 'redux/user/operations';
import {SectionWrapper, Form, Title, Input, Label, Button} from './Register.styled';

export const Register = () => {
  const dispatch = useDispatch();

  const handelSubmit = event => {
    event.preventDefault();
    const { name, email, password } = event.target.elements;
    const user = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    dispatch(register(user));
    event.target.reset();
  };
  return (
    <SectionWrapper>
      <Title>My friend, first you need to register!</Title>
    <Form onSubmit={handelSubmit}>
    <Label for="fname">First Name:</Label>
      <Input type="text" id="fname" placeholder="Your name.." name="name" />
      <Label for="mail">Your Email:</Label>
      <Input type="email" id='mail' name="email" placeholder="Your email"/>
      <Label for="password">Password:</Label>
      <Input type="password" id='password' name="password" placeholder="*******" />
      <Button type="submit">Submit</Button>
    </Form>
    </SectionWrapper>
  );
};
