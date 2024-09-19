import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';

import './App.css';
import Login from './pages/Login';
import Panel from './pages/Panel/Panel';
import Signup from './pages/Signup';
import ClientsContextProvider from './store/clients-context';
import Clients from './pages/Panel/Clients/Clients';
import Products from './pages/Panel/Products/Products';
import NotFoundPage from './pages/NotFoundPage';
import ClientsOutput from './pages/Panel/Clients/components/ClientsOutput';
import ClientForm from './pages/Panel/Clients/components/ClientForm';

/*
const routeDefinitions =  createRoutesFromElements(
  <Route>
    <Route path='/' element={<Login />} />
    <Route path='/panel' element={<Panel />} />
  </Route>
);
*/

/**/

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <Login />,
    errorElement: <NotFoundPage /> 
  },
  { path: '/signup', element: <Signup /> },
  {
    path: '/panel',
    element: <Panel />,
    children: [
      { 
        path: 'clients', 
        element: <Clients />,
        children: [
          { index: true, element: <ClientsOutput /> },
          { path: 'new', element: <ClientForm /> },
          { path: ':clientId', element: <ClientForm /> },
        ]
      },
      { path: 'products', element: <Products /> }
    ]
  }
]);

//const router = createBrowserRouter(routeDefinitions);

function App() {
  return (
    <ClientsContextProvider>
      <RouterProvider router={router} />
    </ClientsContextProvider>
  );
}

export default App;
