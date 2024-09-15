import { useRef, useState } from "react";

import Input from "../../../../components/Input";

export default function ClientForm({ onAdd }) {
    const name = useRef();
    const phone = useRef();
    const email = useRef();
    const [formIsInvalid, setFormIsInvalid] = useState(false);

    function handleSave() {
        const enteredName = name.current.value;
        const enteredPhone = phone.current.value;
        const enteredEmail = email.current.value;

        if (enteredName.trim() === '' || enteredPhone.trim() === '' ||
            enteredEmail.trim() === '') {
            setFormIsInvalid(true);
            return;
        }

        onAdd({
            name: enteredName,
            phone: enteredPhone,
            email: enteredEmail
        });
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
                            <div className="card-body">
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <Input ref={name} label="Nome" />
                                    </div>
                                    <div className="col-md-6">
                                        <Input ref={phone} label="Telefone" />
                                    </div>
                                    <div className="col-md-12">
                                        <Input ref={email} label="E-mail" />
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-secondary" onClick={handleSave}>Salvar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}