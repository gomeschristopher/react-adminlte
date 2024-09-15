import './App.css';
import Auth from './screens/Auth';
import Panel from './screens/Panel/Panel';
import ClientsContextProvider from './store/clients-context';

function App() {
  return (
    <ClientsContextProvider>
      <Panel />
    </ClientsContextProvider>
  );
}

export default App;
