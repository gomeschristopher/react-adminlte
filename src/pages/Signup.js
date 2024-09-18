import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
    const [passwordsAreNotEqual, setPasswordsAreNotEqual] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const data = Object.fromEntries(formData.entries());

        if (data.password !== data['confirm-password']) {
            setPasswordsAreNotEqual(true);
            return;
        }

        console.log(data);

        event.target.reset();
    }

    return (
        <div className="register-page bg-body-secondary">
            <div className="register-box">
                <div className="register-logo"> <a href="../index2.html"><b>Admin</b>LTE</a> </div>
                <div className="card">
                    <div className="card-body register-card-body">
                        <p className="register-box-msg">Register a new membership</p>
                        <form onSubmit={handleSubmit}>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" name="name" placeholder="Full Name" required />
                                <div className="input-group-text"> <span className="bi bi-person"></span> </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" name="email" placeholder="Email" />
                                <div className="input-group-text"> <span className="bi bi-envelope"></span> </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" name="password" placeholder="Password" required />
                                <div className="input-group-text"> <span className="bi bi-lock-fill"></span> </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" name="confirm-password" placeholder="Confirm password" required />
                                <div className="input-group-text"> <span className="bi bi-lock-fill"></span> </div>
                                {passwordsAreNotEqual && (
                                    <div className="invalid-feedback d-block">
                                        Passwords do not match
                                    </div>
                                )}
                            </div>
                            <div className="input-group mb-3">
                                <select type="text" className="form-control" name="state">
                                    <option value="1">Option 1</option>
                                    <option value="3">Option 2</option>
                                </select>
                                <div className="input-group-text"> <span className="bi bi-people"></span> </div>
                            </div>
                            <fieldset className="row mb-3">
                                <legend className="col-form-label col-sm-3 pt-0">Radios</legend>
                                <div className="col-sm-9">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" />
                                        <label className="form-check-label" htmlFor="gridRadios1">
                                            First radio
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                        <label className="form-check-label" htmlFor="gridRadios2">
                                            Second radio
                                        </label>
                                    </div>
                                    <div className="form-check disabled">
                                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled />
                                        <label className="form-check-label" htmlFor="gridRadios3">
                                            Third disabled radio
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                            <div className="row">
                                <div className="col-8">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="agree" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            I agree to the <a href="#">terms</a> </label> </div>
                                </div>
                                <div className="col-4">
                                    <div className="d-grid gap-2">
                                        <button type="submit" className="btn btn-primary">Sign In</button> </div>
                                </div>
                            </div>
                            <p className="mb-0">
                                <Link to="/">Login</Link>
                            </p>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}