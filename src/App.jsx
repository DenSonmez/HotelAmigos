
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout';
import UserPage from './pages/UserPage';
import AdminPage from './pages/AdminPage';
import { useState } from 'react';
import facade from './util/apiFacade';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);


  const clearError = () => {
    setError(null);
  };

  const logout = () => {
    facade.logout()
    setLoggedIn(false)
  }

  const login = (user, pass) => {
    facade.login(user, pass)
      .then(() => {
        setLoggedIn(true);
        clearError();
      })
      .catch((err) => {
        if (err.status) {
          err.fullError.then((e) => {
            console.error("API Error:", e);
            setError(e.message);
          });
        } else {
          console.error("Fatal error:", err);
          setError("Fatal error occurred.");
        }
      });
  };


  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <MainLayout loggedIn={loggedIn} logout={logout} login={login} facade={facade} error={error} // Passerer fejl til MainLayout-komponenten

          />
        }
      >
        <Route path="user" element={<UserPage isAdmin={isAdmin} />} />
        <Route path="admin" element={<AdminPage isAdmin={isAdmin} />} />
      </Route>
    )
  );

  return <RouterProvider router={routes} />;
  
}

export default App;