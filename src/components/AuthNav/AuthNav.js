import { NavLink } from 'react-router-dom';
import { logOut } from 'redux/user/operations';
import { useDispatch } from 'react-redux';
import {HeaderWrapper, Button} from './AuthNav.styled'
import { useAuth } from 'hooks/useAuth';

export const AuthNav = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <HeaderWrapper>
      <ul>
        <li>
          <NavLink to="contacts">My contacts</NavLink>
        </li>
      </ul>
      <p> Welcome, dear {user.name}!</p>
      <Button type="button" onClick={handleLogout}>
        Logout
      </Button>
    </HeaderWrapper>
  );
};
