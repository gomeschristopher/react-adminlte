export default function ClientForm() {
    return (
        <div className="app-content">
            <div className="container-fluid">
                <div className="row g-4">
                    <div className="col-12">
                        <div className="callout callout-info">
                            For detailed documentation of Form visit <a href="https://getbootstrap.com/docs/5.3/forms/overview/" target="_blank" rel="noopener noreferrer" className="callout-link">
                                Bootstrap Form
                            </a> </div>
                    </div>

                    <div className="col-md-12">

                        <div className="card card-info card-outline mb-4">
                            <div className="card-header">
                                <div className="card-title">Form Validation</div>
                            </div>
                            <form className="needs-validation">
                                <div className="card-body">
                                    <div className="row g-3">
                                        <div className="col-md-6"> <label htmlFor="validationCustom01" className="form-label">First name</label> <input type="text" className="form-control" id="validationCustom01" required />
                                            <div className="valid-feedback">Looks good!</div>
                                        </div>
                                        <div className="col-md-6"> <label htmlFor="validationCustom02" className="form-label">Last name</label> <input type="text" className="form-control" id="validationCustom02" required />
                                            <div className="valid-feedback">Looks good!</div>
                                        </div>
                                        <div className="col-md-6"> <label htmlFor="validationCustomUsername" className="form-label">Username</label>
                                            <div className="input-group has-validation"> <span className="input-group-text" id="inputGroupPrepend">@</span> <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                                                <div className="invalid-feedback">
                                                    Please choose a username.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6"> <label htmlFor="validationCustom03" className="form-label">City</label> <input type="text" className="form-control" id="validationCustom03" required />
                                            <div className="invalid-feedback">
                                                Please provide a valid city.
                                            </div>
                                        </div>
                                        <div className="col-md-6"> <label htmlFor="validationCustom04" className="form-label">State</label>
                                            <select className="form-select" id="validationCustom04" required>
                                                <option disabled >Choose...</option>
                                                <option>...</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please select a valid state.
                                            </div>
                                        </div>
                                        <div className="col-md-6"> <label htmlFor="validationCustom05" className="form-label">Zip</label> <input type="text" className="form-control" id="validationCustom05" required />
                                            <div className="invalid-feedback">
                                                Please provide a valid zip.
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-check"> <input className="form-check-input" type="checkbox" id="invalidCheck" required /> <label className="form-check-label" htmlFor="invalidCheck">
                                                Agree to terms and conditions
                                            </label>
                                                <div className="invalid-feedback">
                                                    You must agree before submitting.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer"> <button className="btn btn-info" type="submit">Submit form</button> </div>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}