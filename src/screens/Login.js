import Input from "../components/Input";
import { useInput } from "../hooks/useInput";

export default function Login() {
    const {
        value: emailValue,
        handleInputChange: handleEmailChange,
        handleInputBlur: handleEmailBlur,
        hasError: emailHasError
    } = useInput('', (value) => value.includes('@'));

    const {
        value: passwordValue,
        handleInputChange: handlePasswordChange,
        handleInputBlur: handlePasswordBlur,
        hasError: passwordHasError
    } = useInput('', (value) => value.trim() !== '');

    function handleSubmit(event) {
        event.preventDefault();

        if(emailHasError || passwordHasError) {
            return;
        }

        console.log(emailValue, passwordValue)
    }

    return (
        <div className="login-page bg-body-secondary">
            <div className="login-box">
                <div className="login-logo"> <a><b>Admin</b>LTE</a> </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <Input placeholder="Email" icon="bi bi-envelope"
                                    onBlur={handleEmailBlur}
                                    onChange={handleEmailChange}
                                    value={emailValue}
                                    error={emailHasError && 'Enter valid e-mail'}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <Input placeholder="Password" icon="bi bi-lock-fill" type="password"
                                     onBlur={handlePasswordBlur}
                                     onChange={handlePasswordChange}
                                     value={passwordValue}
                                     error={passwordHasError && 'Enter valid password'}
                                     required />
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-link">Reset</button>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="d-grid">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}