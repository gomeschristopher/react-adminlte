import { useContext, useState } from "react";

import ClientForm from "./components/ClientForm";
import ClientsOutput from "./components/ClientsOutput";
import { ClientsContext } from "../../../store/clients-context";

export default function Clients() {
    const clientsCtx = useContext(ClientsContext);

    const [isClientFormOpen, setIsClientFormOpen] = useState(false);
    const [selectedClient, setSelectedClient] = useState();

    const clients = clientsCtx.clients;

    function handleSaveClient(clientData) {
        if (!clientData.id) {
            clientData = {
                ...clientData,
                id: Math.random()
            };
            clientsCtx.addClient(clientData);
        } else {
            clientsCtx.updateClient(clientData.id, clientData);
        }

        setIsClientFormOpen(false);
    }

    function onEditClient(clientId) {
        console.log(clientId)
        const client = clients.find(client => client.id === clientId);
        setSelectedClient({ ...client });
        setIsClientFormOpen(true);
    }

    function handleCreateNewClient() {
        setSelectedClient({
            id: null,
            name: '',
            phone: '',
            email: ''
        });

        setIsClientFormOpen(true);
    }

    function handleRemoveClient(clientId) {
        clientsCtx.deleteClient(clientId);
    }

    return (
        <>
            <div className="app-content-header">
                <div className="container-fluid">
                    <div className="d-flex justify-content-between">
                        <h3 className="mb-0">Clientes</h3>
                        <button className="btn btn-secondary" onClick={handleCreateNewClient}>Novo</button>
                    </div>
                </div>
            </div>
            {isClientFormOpen ? (
                <ClientForm onAdd={handleSaveClient} defaultValues={selectedClient} />
            ) : (
                <ClientsOutput clients={clients} editClient={onEditClient} removeClient={handleRemoveClient} />
            )}
        </>
    )
}