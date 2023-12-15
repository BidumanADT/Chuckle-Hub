import NewJokeSubmission from "../components/NewJokeSubmission";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { api } from "../utilities";

const AUserPage = () => {
  const { client } = useOutletContext();
  const [userJokes, setUserJokes] = useState([]);

  useEffect(() => {
    const getUserJokes = async () => {
      try {
        const response = api.get(`jokes/user_jokes/${client.id}`);
        console.log(response.data);
        setUserJokes(response.data);
      } catch (error) {
        console.error("something went wrong getting user jokes:", error);
      }
    };
    getUserJokes();
  }, []);

  return (
    <>
      <div>
        <div>
          <h2>Your Posted Jokes</h2>
          <ul>
            {userJokes && userJokes.map((joke) => (
              <li key={joke.id}>{joke.content}</li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h2>Post a New Joke</h2>
        <NewJokeSubmission client={{client}} />
      </div>
    </>
  );
};
export default AUserPage;
