import { useState, useEffect } from "react";
import { api } from "../utilities";
// import { useOutletContext } from "react-router-dom";

const BrowseJokesPage = () => {
  const [allJokes, setAllJokes] = useState([]);
//   const [ client ] = useOutletContext();

  const getAllJokes = async () => {
    let response = api.get("jokes/all_jokes/");
    if (response.status === 200) {
      console.log(response);
      setAllJokes(response.data);
      // console.log(allJokes);
    } else {
      alert("something went wrong");
    }
  };

  useEffect(() => {
    // console.log(client);
    getAllJokes();
  }, []);

  return <h1>a page for browsing current jokes will go here</h1>;
};
export default BrowseJokesPage;
