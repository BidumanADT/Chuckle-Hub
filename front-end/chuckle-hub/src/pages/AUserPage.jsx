import NewJokeSubmission from "../components/NewJokeSubmission";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { api } from "../utilities";

const AUserPage = () => {
  const { client } = useOutletContext();
  const [userJokes, setUserJokes] = useState([]);

  const getUserJokes = async () => {
    // console.log(client)
    try {
      const response = await api.get(`jokes/user_jokes/${client.id}/`);
      // console.log(response.data);
      setUserJokes(response.data);
    } catch (error) {
      console.error("something went wrong getting user jokes:", error);
    }
  };

  useEffect(() => {
    getUserJokes();
  }, []);

  const onJokeSubmitted = () => {
    getUserJokes();
  };

  const handleDeleteJoke = async (id) => {
    try {
      const response = await api.delete(`jokes/delete_joke/${id}/`);
      setUserJokes(userJokes.filter((joke) => joke.id !== id));
    } catch (error) {
      console.error("something went wrong deleting joke:", error);
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="joke-collection">
          <h2>Your Posted Jokes</h2>
          {userJokes ? (
            <ul>
              {userJokes.map((joke) => (
                <li key={joke.id} className="joke-card">
                  {joke.title}
                  <br />
                  {joke.content}
                  <span className="edit-button">
                    <button onClick={() => handleEditJoke(joke.id)}>
                      Edit
                    </button>
                  </span>
                  <span className="delete-button">
                    <button onClick={() => handleDeleteJoke(joke.id)}>
                      Delete
                    </button>
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p>You haven't posted any jokes yet</p>
          )}
        </div>
        <div className="new-joke-form">
          <h2>Post a New Joke</h2>
          <NewJokeSubmission
            client={{ client }}
            onJokeSubmitted={onJokeSubmitted}
          />
        </div>
      </div>
    </>
  );
};
export default AUserPage;
