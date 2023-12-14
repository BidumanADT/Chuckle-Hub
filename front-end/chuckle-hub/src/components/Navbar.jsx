import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";
import { api } from "../utilities";
import { useNavigate } from "react-router-dom";

export const Navbar = ({ client, setClient }) => {
  const navigate = useNavigate();

  const logOut = async () => {
    let response = await api.post("users/logout/");
    if (response.status === 204) {
      setClient(null);
      localStorage.removeItem("token");
      delete api.defaults.headers.common["Authorization"];
      navigate("/");
    }
  };
  return (
    <>
      {/* {client ? ( */}
        <Row style={{ display: "flex", justifyContent: "space-around" }}>
          <Link to="user/<int:id>/">My Profile</Link>
          <Link to="browse-jokes/">Browse Jokes</Link>
          <Link to="popular/">Most Popular</Link>
          <Link to="random-joke/">Random Joke</Link>
          <Link to="/">login page</Link>
          <button onClick={logOut}>Log Out</button>
        </Row>
      {/* ) : (
        <Row style={{ display: "flex", justifyContent: "space-around" }}>
            <p>Please log in or sign up to enter the site</p>
          {/* <Link to={"/"}>Login/Signup</Link> */}
        {/* </Row> */}
      {/* )} */}
    </>
  );
};
