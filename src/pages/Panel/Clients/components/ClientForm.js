import { useContext, useState } from "react";

import Input from "../../../../components/Input";
import { useInput } from "../../../../hooks/useInput";
import { ClientsContext } from "../../../../store/clients-context";
import { useNavigate, useParams } from "react-router-dom";

export default function ClientForm() {
    const navigate = useNavigate();

    const params = useParams();
    const clientId = params.clientId;
    const clientsCtx = useContext(ClientsContext);
    const defaultValues = clientsCtx.clients.find(client => client.id === clientId);

    const {
        value: nameValue,
        handleInputChange: handleNameChange,
        handleInputBlur: handleNameBlur,
        hasError: nameHasError
    } = useInput(defaultValues ? defaultValues.name : '',
        (value) => value.trim() !== '');

    const {
        value: emailValue,
        handleInputChange: handleEmailChange,
        handleInputBlur: handleEmailBlur,
        hasError: emailHasError
    } = useInput(defaultValues ? defaultValues.email : '', (value) => value.trim() !== '');

    const {
        value: phoneValue,
        handleInputChange: handlePhoneChange,
        handleInputBlur: handlePhoneBlur,
        hasError: phoneHasError
    } = useInput(defaultValues ? defaultValues.phone : '', (value) => value.trim() !== '');

    const [formIsInvalid, setFormIsInvalid] = useState(false);

    function handleSave(event) {
        event.preventDefault();

        if (nameHasError || emailHasError || phoneHasError) {
            setFormIsInvalid(true);
            return;
        }

        handleSaveClient({
            id: defaultValues?.id,
            name: nameValue,
            phone: phoneValue,
            email: emailValue
        });
    }

    function handleSaveClient(clientData) {
        if (!clientData.id) {
            clientData = {
                ...clientData,
                id: (Math.random() + 1).toString(36).substring(7)
            };
            clientsCtx.addClient(clientData);
        } else {
            clientsCtx.updateClient(clientData.id, clientData);
        }

        navigate('/panel/clients');
    }

    return (
        <div className="app-content">
            <div className="container-fluid">
                <div className="row g-4">
                    {formIsInvalid && (
                        <div className="col-12">
                            <div className="callout callout-danger">
                                Dados inválidos, verifique.
                            </div>
                        </div>
                    )}

                    <div className="col-md-12">
                        <div className="card card-secondary card-outline mb-4">
                            <div className="card-header">
                                <div className="card-title">Form Validation</div>
                            </div>
                            <form onSubmit={handleSave}>
                                <div className="card-body">
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <Input placeholder="Name"
                                                onBlur={handleNameBlur}
                                                onChange={handleNameChange}
                                                value={nameValue}
                                                error={nameHasError && 'Insira um nome válido'} label="Nome"
                                                required />
                                        </div>
                                        <div className="col-md-6">
                                            <Input placeholder="Phone"
                                                onBlur={handlePhoneBlur}
                                                onChange={handlePhoneChange}
                                                value={phoneValue}
                                                error={phoneHasError && 'Insira um telefone válido'} label="Telefone"
                                                required />
                                        </div>
                                        <div className="col-md-12">
                                            <Input placeholder="Email"
                                                onBlur={handleEmailBlur}
                                                onChange={handleEmailChange}
                                                value={emailValue}
                                                error={emailHasError && 'Insira um e-mail válido'} label="Email"
                                                required />
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-secondary">Salvar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}