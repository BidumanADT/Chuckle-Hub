import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import { api } from "../utilities";
import { useNavigate } from "react-router-dom";

// todo: send users to their actual page when form is submitted

const SignInUpPage = () => {
  const [showSignup, setShowSignup] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    let response = await api.post("users/login/", credentials)
    if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        api.defaults.headers.common["Authorization"] = `Token ${response.data.token}`;
        navigate("/user/<int:id>/")
    } else {
        alert("something went wrong")
    }
    // console.log("Logging in with:", credentials);
  };

  const handleSignup = () => {
    // show signup form
    setShowSignup(true);
  };

  const handleSignupSubmit = async (userData) => {
    let response = await api.post("users/signup/", userData);
    if (response.status === 201){
        localStorage.setItem("token", response.data.token);
        api.defaults.headers.common["Authorization"] = `Token ${response.data.token}`;
        navigate("/user/<int:id>/")
    } else {
        alert("something went wrong")
    }
    // signup logic and API call
    // console.log("Signing up with:", userData);
  };

  return (
    <div>
      {showSignup ? (
        <SignupForm onSubmit={handleSignupSubmit} />
      ) : (
        <LoginForm onLogin={handleLogin} onSignup={handleSignup} />
      )}
    </div>
  );
};

export default SignInUpPage;
