import { Suspense, useContext, useState } from "react";

import Input from "../../../../components/Input";
import { useInput } from "../../../../hooks/useInput";
import { ClientsContext } from "../../../../store/clients-context";
import { useNavigate, useParams, useLoaderData, json, Form, redirect, useNavigation, useActionData, defer, Await } from "react-router-dom";

export default function ClientForm({ method }) {
    const navigate = useNavigate();
    const navigation = useNavigation();

    const isSubmitting = navigation.state === 'submitting';

    const { defaultValues, clients } = useLoaderData();

    const actionData = useActionData();

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
            //clientsCtx.addClient(clientData);
        } else {
            //clientsCtx.updateClient(clientData.id, clientData);
        }

        navigate('/panel/clients');
    }

    return (
        <div className="app-content">
            <div className="container-fluid">
                <div className="row g-4">
                    {(actionData) && (
                        <div className="col-12">
                            <div className="callout callout-danger">
                                {actionData.message}
                            </div>
                        </div>
                    )}

                    <div className="col-md-12">
                        <div className="card card-secondary card-outline mb-4">
                            <div className="card-header">
                                <div className="card-title">Client form</div>
                            </div>
                            <Form method={method}>
                                <div className="card-body">
                                    <Suspense fallback={<p>Loading...</p>}>
                                        <Await resolve={defaultValues}>
                                            {() => (
                                                <div className="row g-3">
                                                    <div className="col-md-6">
                                                        <Input placeholder="Name"
                                                            name="name"
                                                            onBlur={handleNameBlur}
                                                            onChange={handleNameChange}
                                                            value={nameValue}
                                                            error={nameHasError && 'Insira um nome válido'} label="Nome"
                                                            required />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <Input placeholder="Phone"
                                                            name="phone"
                                                            onBlur={handlePhoneBlur}
                                                            onChange={handlePhoneChange}
                                                            value={phoneValue}
                                                            error={phoneHasError && 'Insira um telefone válido'} label="Telefone"
                                                            required />
                                                    </div>
                                                    <div className="col-md-12">
                                                        <Input placeholder="Email"
                                                            name="email"
                                                            onBlur={handleEmailBlur}
                                                            onChange={handleEmailChange}
                                                            value={emailValue}
                                                            error={emailHasError && 'Insira um e-mail válido'} label="Email"
                                                            required />
                                                    </div>
                                                </div>
                                            )}
                                        </Await>
                                    </Suspense>
                                    <Suspense fallback={<p>Loading...</p>}>
                                        <Await resolve={clients}>
                                            {loadedClients => (
                                                <div className="col-md-12">
                                                    <label className="form-label">Cliente</label>
                                                    <select className="form-control">
                                                        {loadedClients.map(client => (
                                                            <option key={client.id}>{client.name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            )}
                                        </Await>
                                    </Suspense>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-secondary" disabled={isSubmitting}>{isSubmitting ? 'Saving...' : 'Save'}</button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function loadClient(id) {
    const response = await fetch('http://localhost:80/api/contacts/' + id);

    if (!response.ok) {
        throw json(
            { message: 'Could not fetch the client.' },
            { status: 500 }
        );
    } else {
        const responseData = await response.json();
        return responseData;
    }
}

async function loadClients() {
    const response = await fetch('http://localhost:80/api/contacts');
    if (!response.ok) {
        throw json(
            { message: 'Could not fetch the clients.' },
            { status: 500 }
        );
    } else {
        const responseData = await response.json();
        return responseData;
    }
}

export async function loader({ request, params }) {
    const id = params.clientId;

    const defaultValues = await loadClient(id);
    console.log(defaultValues)

    return defer({
        defaultValues,
        clients: loadClients()
    });
}

export async function action({ request, params }) {
    const data = await request.formData();

    const clientData = {
        name: data.get('name'),
        email: data.get('email'),
        phone: data.get('phone'),
    };

    let url = 'http://localhost:80/api/contacts';
    if (request.method === 'PUT') {
        url += '/' + params.clientId;
    }

    const response = await fetch(url, {
        method: request.method,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(clientData)
    });

    if (!response.ok) {
        const error = await response.text()

        return json(
            { message: JSON.parse(error).message },
            { status: 500 }
        );
    }

    return redirect('/panel/clients');
}