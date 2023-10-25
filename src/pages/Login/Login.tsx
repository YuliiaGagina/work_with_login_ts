import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/user/operations';
import {
  SectionWrapper,
  Form,
  Title,
  Input,
  Label,
  Button,
} from './Login.styled';

export const Login = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.user.error);

  const handelSubmit = event => {
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
        <Label for="name">Your Email:</Label>
        <Input type="text" id="name" name="name" placeholder="Your name" />
        <Label for="password">Password:</Label>
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
