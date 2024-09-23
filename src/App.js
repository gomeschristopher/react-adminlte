import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';

import './App.css';
import Login from './pages/Login';
import Panel from './pages/Panel/Panel';
import Signup from './pages/Signup';
import ClientsContextProvider from './store/clients-context';
import Clients from './pages/Panel/Clients/Clients';
import Products from './pages/Panel/Products/Products';
import NotFoundPage from './pages/NotFoundPage';
import ClientsOutput, { actionDeleteClient, loader as clientsLoader } from './pages/Panel/Clients/components/ClientsOutput';
import ClientForm, { loader as clientLoader, action as saveClientAction } from './pages/Panel/Clients/components/ClientForm';
import ErrorPage from './pages/Error';
import Error from './pages/Panel/Error';

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
    errorElement: <ErrorPage />,
  },
  { path: '/signup', element: <Signup /> },
  {
    path: '/panel',
    element: <Panel />,

    children: [
      {
        path: 'clients',
        element: <Clients />,
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <ClientsOutput />,
            loader: clientsLoader,
            action: actionDeleteClient
          },
          {
            path: 'new',
            element: <ClientForm method="POST" />,
            action: saveClientAction
          },
          {
            path: ':clientId',
            element: <ClientForm method="PUT" />,
            loader: clientLoader,
            action: saveClientAction
          },
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
