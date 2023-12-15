import { useState } from "react";

const LoginForm = ({ onLogin, onSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Show the signup form
    onSignup();
  };

  return (
    <div className="login-form">
      <form onSubmit={handleLogin}>
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
        <div className="center-text">
          <p>Don't have an account?</p>
          <button type="button" onClick={handleSignup}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
