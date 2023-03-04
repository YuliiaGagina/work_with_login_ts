// import { ContactForm } from './ContactForm/ContactForm';
// import ContactList from 'components/ContactList/ContactList';
// import Filter from 'components/Filter/Filter';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';
import {Contacts} from 'pages/Contacts/Contacts';
import { Login } from 'pages/Login/Login';
import { Register } from '../pages/Register/Register';
import { refreshUser } from 'redux/user/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Home } from './Home/Home';
import { useAuth } from 'hooks/useAuth';

export function App() {
  const dispatch = useDispatch();
  const {isRefreshing} = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user </b>
  ) : (
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home/>} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
      </Routes>
    
  
  );
}
