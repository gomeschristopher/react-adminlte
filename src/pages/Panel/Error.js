import { useRouteError } from "react-router-dom";

export default function Error() {
    const error = useRouteError();

    const status = error.status;
    let title = 'Error';
    let message = 'An error occurred!';

    if (status === 500) {
        message = error.data.message;
    }

    if (status === 404) {
        title = 'Not found';
        message = 'Could not found the page.';
    }

    return (
        <>
            <div className="app-content-header">
                <div className="container-fluid">
                    <div className="d-flex justify-content-between">
                        <h3 className="mb-0">{status} {title}</h3>
                    </div>
                </div>
            </div>
            <div className="app-content">
                <div className="container-fluid">
                    <div>
                        <h4>{message}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}