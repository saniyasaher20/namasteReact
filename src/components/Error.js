import { useRouteError } from "react-router";
const Error = () => {
    const err = useRouteError()
    return (
        <div className="container py-4">
            <h1 className="text-4xl text-red-700 font-bold">{ err.status + " " + err.statusText}</h1>
        </div>
    )
}

export default Error;