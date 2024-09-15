export default function Auth() {
    return (
        <div className="login-page bg-body-secondary">
            <div className="login-box">
                <div className="login-logo"> <a><b>Admin</b>LTE</a> </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        <form action="../index3.html" method="post">
                            <div className="input-group mb-3"> <input type="email" className="form-control" placeholder="Email" />
                                <div className="input-group-text"> <span className="bi bi-envelope"></span> </div>
                            </div>
                            <div className="input-group mb-3"> <input type="password" className="form-control" placeholder="Password" />
                                <div className="input-group-text"> <span className="bi bi-lock-fill"></span> </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <div className="d-grid gap-2"> <button type="submit" className="btn btn-primary">Sign In</button> </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}