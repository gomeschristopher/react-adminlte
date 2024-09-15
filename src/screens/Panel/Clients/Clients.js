import { useContext, useState } from "react";

import ClientForm from "./components/ClientForm";
import ClientsOutput from "./components/ClientsOutput";
import { ClientsContext } from "../../../store/clients-context";

export default function Clients() {
    const clientsCtx = useContext(ClientsContext);

    const [isClientFormOpen, setIsClientFormOpen] = useState(false);

    function handleAddClient(clientData) {
        clientData = {
            ...clientData,
            id: Math.random()
        };
        clientsCtx.addClient(clientData);
        
        setIsClientFormOpen(false);
    }

    const clients = clientsCtx.clients;

    return (
        <>
            <div className="app-content-header">
                <div className="container-fluid">
                    <div className="d-flex justify-content-between">
                        <h3 className="mb-0">Clientes</h3>
                        <button className="btn btn-secondary" onClick={() => setIsClientFormOpen(true)}>Novo</button>
                    </div>
                </div>
            </div>
            {isClientFormOpen ? (
                <ClientForm onAdd={handleAddClient} />
            ) : (
                <ClientsOutput clients={clients} />
            )}
        </>
    )
}