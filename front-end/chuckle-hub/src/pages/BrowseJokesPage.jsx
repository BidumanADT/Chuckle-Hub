import { useState, useEffect } from "react";
import { api } from "../utilities";
import { useOutletContext } from "react-router-dom";

const BrowseJokesPage = () => {
  const [allJokes, setAllJokes] = useState([]);
  const { client } = useOutletContext();

  useEffect(() => {
    const getAllJokes = async () => {
      let response = await api.get("jokes/all_jokes/");
      if (response.status === 200) {
        console.log(response.data);
        setAllJokes(response.data);
        // console.log(allJokes);
      } else {
        alert("something went wrong getting jokes");
      }
    };
    getAllJokes();
  }, []);

  return (
    <>
      <div>
      <h2>Current Jokes</h2>
        {allJokes ? (
          <ol>
            {allJokes.map((joke) => (
              <li key={joke.id}>Category: {joke.category.name}<br />{joke.title}<br />{joke.content}<br />Posted by: {joke.author.display_name}</li>
            ))}
          </ol>) : (
            <p>Joke database loading...</p>
        )}
      </div>
    </>
  );
};
export default BrowseJokesPage;
