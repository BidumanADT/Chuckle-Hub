import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <Row style={{display:"flex", justifyContent:"space-around"}}>
            <Link to="/">My Profile</Link> 
            <Link to="browse-jokes/">Browse Jokes</Link>
            <Link to="popular/">Most Popular</Link>
            <Link to="random-joke/">Random Joke</Link>
        </Row>
    )
}
