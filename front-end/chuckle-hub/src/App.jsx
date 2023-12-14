import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { useState, useEffect } from "react";
import { api } from "./utilities";

export default function App() {
  const [client, setClient] = useState(null);

  const getUser = async () => {
    let token = localStorage.getItem("token");
    if (token) {
      api.defaults.headers.common["Authorization"] = `Token ${token}`;
      try {
        let response = await api.get("users/");
        setClient(response.data.client);
      } catch (error) {
        console.error("something went wrong getting user info:", error);
        setClient(null);
        localStorage.removeItem("token");
        delete api.defaults.headers.common["Authorization"];
      }
    }
  };

  // const token = localStorage.getItem("token");
  // if (token) {
  //   setClient({ username: "loading..." });
  //   getUser();
  // } else {
  //   alert("something went wrong");
  // }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Container>
      <Row style={{ textAlign: "center" }}>
        <h1>Personal Project: Chuckle-Hub</h1>
      </Row>
      <Navbar client={client} setClient={setClient} />
      <Outlet context={{ client, setClient }} />
    </Container>
  );
}
