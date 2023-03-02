import { Outlet } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';



export const Navbar = () => {
  const { isLoggedIn } = useAuth();
  

  return (
    <div>
     
      {isLoggedIn ? <AuthNav /> : <UserMenu />}
      <Outlet />
    </div>
  );
};