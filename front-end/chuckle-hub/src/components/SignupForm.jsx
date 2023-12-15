import { useState } from "react";
import { useOutletContext } from "react-router";

const SignupForm = ({ onSubmit }) => {
  const [display_name, setDisplay_name] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password, display_name, bio });
  };

  return (
    <div className="signup-form">
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Display Name (optional):</label>
        <input
          type="text"
          value={display_name}
          onChange={(e) => setDisplay_name(e.target.value)}
        />
        <label>Bio (optional):</label>
        <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
