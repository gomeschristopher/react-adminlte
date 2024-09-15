import { createContext, useReducer } from "react";

export const ClientsContext = createContext({
    clients: [],
    addClient: ({ name, email, phone }) => { },
    setClients: (clients) => { },
    deleteClient: (id) => { },
    updateClient: (id, { name, email, phone }) => { }
});

function clientsReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return [{ ...action.payload }, ...state];
        case 'SET':
            return action.payload;
        case 'UPDATE':
            const updatableClientIndex = state.findIndex(
                (client) => client.id === action.payload.id
            );
            const updatableClient = state[updatableClientIndex];
            const updatableItem = { ...updatableClient, ...action.payload.data };
            const updatableClients = [...state];
            updatableClients[updatableClientIndex] = updatableItem;
            return updatableClients;
        case 'DELETE':
            return state.filter(client => client.id !== action.payload);
        default:
            return state;
    }
}

function ClientsContextProvider({ children }) {
    const [clientsState, dispatch] = useReducer(clientsReducer, []);

    function addClient(clientData) {
        dispatch({ type: 'ADD', payload: clientData });
    }

    function setClients(clients) {
        dispatch({ type: 'SET', payload: clients });
    }

    function deleteClient(id) {
        dispatch({ type: 'DELETE', payload: id });
    }

    function updateClient(id, clientData) {
        dispatch({ type: 'UPDATE', payload: { id, data: clientData } });
    }

    const value = {
        clients: clientsState,
        addClient: addClient,
        deleteClient: deleteClient,
        updateClient: updateClient,
        setClients: setClients
    };

    return <ClientsContext.Provider value={value}>{children}</ClientsContext.Provider>
}

export default ClientsContextProvider;