import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Username from './components/username';
import Password from './components/Password';
import Recovery from './components/Recovery';
import Profile from './components/Profile';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';
import Register from './components/Register';

/** root routes */

const router =  createBrowserRouter([
    {
      path: '/',
      element: <Username></Username>
    },
    {
      path: '/Register',
      element: <Register></Register>
    },
    {
      path: '/Password',
      element: <Password></Password>
    },
    {
      path: '/Recovery',
      element: <Recovery></Recovery>
    },
    {
      path: '/Profile',
      element: <Profile></Profile>
    },
    {
      path: '/Reset',
      element: <Reset></Reset>
    },
    {
      path: '*',
      element: <PageNotFound></PageNotFound>
    }
])

function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
