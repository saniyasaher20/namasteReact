import { Header } from "./Header"
import { useRouteError } from "react-router-dom";
const About = () => {
    const err = useRouteError()
    console.log(err)
    return (
        <>
            <Header />
            <h2>{err.status + ":" + err.statusText}</h2>
            <img className="img-fluid" src="https://img.freepik.com/free-vector/error-404-page-found-website-template_25147-67.jpg?size=626&ext=jpg" alt="Error" width="100" />
        </>
    )
}

export default About;