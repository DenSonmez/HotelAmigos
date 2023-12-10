import { NavLink, Outlet } from 'react-router-dom';
import LogIn from '../components/LogIn';
import LoggedIn from '../components/LoggedIn';

function MainLayout({ loggedIn, login, logout, facade, error }) {
  
  return (
    <>
      <div id="container">
        <NavLink to="/">Home</NavLink> <span className="separator"></span>
        <NavLink to="user">User</NavLink> <span className="separator"></span>
        <NavLink to="admin">Admin</NavLink>
        <h1>Welcome to the Amigos Hotel site</h1>
        <div>
          {!loggedIn ? (
            <LogIn login={login} />
          ) : (
            <div>
              <LoggedIn facade={facade} />
              <button onClick={logout}>Logout</button>
            </div>
          )}
        </div>
        <div>
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default MainLayout;
