import { Form, Link, redirect, useActionData, useNavigation, useSearchParams } from "react-router-dom";

export default function Authentication() {
    const [searchParams] = useSearchParams();
    const isSignup = searchParams.get('mode') === 'signup';

    const actionData = useActionData();

    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";

    return (
        <div className="login-page bg-body-secondary">
            <div className="login-box">
                <div className="login-logo"> <a><b>Admin</b>LTE</a> </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        {(actionData) && (
                            <div className="col-12 mb-4">
                                <div className="callout callout-danger">
                                    {actionData.message}
                                </div>
                            </div>
                        )}
                        <Form method="POST">
                            <div className="mb-3">
                                <div className="input-group">
                                    <input className="form-control" name="email" placeholder="Email" required />
                                    <div className="input-group-text">
                                        <span className="bi bi-envelope"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="input-group">
                                    <input className="form-control" type="password" name="password" placeholder="Password" required />
                                    <div className="input-group-text">
                                        <span className="bi bi-lock-fill"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="d-grid">
                                        <Link to={isSignup ? '?mode=login' : '?mode=signup'}>{isSignup ? 'Login' : 'Signup'}</Link>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="d-grid">
                                        <button className="btn btn-primary" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit'}</button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function action({ request }) {
    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get('mode') || 'login';

    const data = await request.formData();
    const authData = {
        email: data.get('email'),
        password: data.get('password'),
    };

    console.log(authData)

    const response = await fetch('http://localhost:80/api/auth/' + mode, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(authData)
    });

    if (response.status === 401) {
        return response;
    }

    const resData = await response.json();
    const token = resData.idToken;
    localStorage.setItem('token', token);

    return redirect('/panel/clients');
}