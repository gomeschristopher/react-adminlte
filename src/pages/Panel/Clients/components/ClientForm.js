import { useState } from "react";

import Input from "../../../../components/Input";
import { useInput } from "../../../../hooks/useInput";

export default function ClientForm({ onAdd, defaultValues }) {
    const {
        value: nameValue,
        handleInputChange: handleNameChange,
        handleInputBlur: handleNameBlur,
        hasError: nameHasError
    } = useInput(defaultValues.name ? defaultValues.name : '',
        (value) => value.trim() !== '');

    const {
        value: emailValue,
        handleInputChange: handleEmailChange,
        handleInputBlur: handleEmailBlur,
        hasError: emailHasError
    } = useInput(defaultValues.email ? defaultValues.email : '', (value) => value.trim() !== '');

    const {
        value: phoneValue,
        handleInputChange: handlePhoneChange,
        handleInputBlur: handlePhoneBlur,
        hasError: phoneHasError
    } = useInput(defaultValues.phone ? defaultValues.phone : '', (value) => value.trim() !== '');

    const [formIsInvalid, setFormIsInvalid] = useState(false);

    function handleSave(event) {
        event.preventDefault();

        if (nameHasError || emailHasError || phoneHasError) {
            setFormIsInvalid(true);
            return;
        }

        onAdd({
            id: defaultValues.id,
            name: nameValue,
            phone: phoneValue,
            email: emailValue
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