import { useState } from "react";

const LoginForm = ({ onLogin, onSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Perform login validation and submit
    onLogin({ email, password });
  };

  const handleSignup = () => {
    // Show the signup form
    onSignup();
  };

  return (
    <div>
      <form>
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
        <button type="button" onClick={handleLogin}>
          Log In
        </button>
        <br />
        <p>Don't have an account?</p>
        <button type="button" onClick={handleSignup}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
