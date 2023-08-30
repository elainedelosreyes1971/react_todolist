import { useRouteError } from "react-router-dom";
export default function ErrorPage() {
    const error = useRouteError();
    return (
        <div>
            <h1> This is error page. </h1>
            <div>Error status: {error.statusText}</div>
            <div>Error message: {error.message}</div>
        </div>
    )
}