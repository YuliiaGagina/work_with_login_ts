import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/user/operations';
import { RootState } from "../../redux/store";
import {  FormEvent } from 'react';
import {
  SectionWrapper,
  Form,
  Title,
  Input,
  Label,
  Button,
} from './Login.styled';
import { useAppDispatch } from '../../hooks/redux';

export const Login = () => {
 const dispatch = useAppDispatch();
  const error = useSelector((state : RootState) => state.user.error);

  const handelSubmit =  ( event : FormEvent, ) => {
    event.preventDefault();
    const { name, password } = event.target.elements;
    const user = {
      username: name.value,
      password: password.value,
    };
    dispatch(login(user));

    event.target.reset();
  };
  return (
    <SectionWrapper>
      <Title>Log in and see your all people!</Title>

      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      <Form onSubmit={handelSubmit}>
        <Label htmlFor="name">Your Email:</Label>
        <Input type="text" id="name" name="name" placeholder="Your name" />
        <Label htmlFor="password">Password:</Label>
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="*******"
        />
        <Button type="submit">Submit</Button>
      </Form>
    </SectionWrapper>
  );
};
