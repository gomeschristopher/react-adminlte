import './App.css';
import Login from './screens/Login';
import Panel from './screens/Panel/Panel';
import Signup from './screens/Signup';
import ClientsContextProvider from './store/clients-context';

function App() {
  return (
    <ClientsContextProvider>
      <Panel />
    </ClientsContextProvider>
  );
}

export default App;
