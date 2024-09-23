import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    let title = 'Error';
    let message = 'An error occurred!';

    if (error.status === 500) {
        message = JSON.parse(error.data).message;
    }

    if (error.status === 404) {
        title = 'Not found';
        message = 'Could not found the page.';
    }

    return (
        <div className="container">
            <h1 className="mt-5">{error.status} {title}</h1>
            <p className="lead">{message}</p>
        </div>
    );
}