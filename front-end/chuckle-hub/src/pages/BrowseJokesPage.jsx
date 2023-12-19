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
        // console.log(response.data);
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
      <div className="browse-joke-cards"> 
        {allJokes.map((joke) => (
          <div key={joke.id} className="browse-joke-card">
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
            <div className="joke-meta">
              <span>Category: {joke.category.name}</span>
              <span>Posted by: {joke.author.display_name}</span>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <p>Joke database loading...</p>
    )}
  </div>
</>
  );
};
export default BrowseJokesPage;
