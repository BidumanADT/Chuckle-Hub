import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import { api } from "../utilities";

const RandomJokePage = () => {
  const [joke, setJoke] = useState("");
  const [jokeImage, setJokeImage] = useState("");

  const getRandomJoke = async () => {
    let response = await api.get("random/random_joke/");
    if (response.status === 200) {
      setJoke(response.data);
      // console.log(joke);
    } else {
      alert("something went wrong");
    }
  };
  // todo: giphy api is returning the same image everytime; refactor back-end to fix
  const getJokeImage = async () => {
    let response = await api.get("images/joke_image/");
    if (response.status === 200) {
      setJokeImage(response.data);
      // console.log(jokeImage);
    } else {
      alert("something went wrong");
    }
  };

  useEffect(() => {
    getRandomJoke();
  }, []);

  useEffect(() => {
    getJokeImage();
  }, [joke]);

  return (
    <div className="app-container">
      <div className="card-container">
        <div className="text-container">
          <h2>Random Joke</h2>
          <p>{joke ? joke : "Joke failed to load"}</p>
          <Button variant="primary" onClick={() => getRandomJoke()}>
            Get Another
          </Button>
        </div>
        {jokeImage && (
          <div className="image-container">
            <img
              src={jokeImage}
              alt="Joke Image"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default RandomJokePage;


{/* <Card style={{ width: "50%", display: "flex"}}>
      <Card.Body>
        <Card.Title>Random Joke</Card.Title>
        <Card.Text>{joke ? joke : "Joke failed to load"}</Card.Text>
        <div style={{ float: "right" }}>
          <Card.Img
            variant="top"
            src={jokeImage ? jokeImage : "Image failed to load"}
            style={{ width: "50%", height: "auto" }}
          />
        </div>
        <Button variant="primary" onClick={() => getRandomJoke()}>
          Get Another
        </Button>
      </Card.Body>
    </Card> */}
