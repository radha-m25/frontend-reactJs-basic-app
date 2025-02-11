import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userDetails = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:5000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });

      // const data = await response.json();

      if (response.ok) {
        navigate("/");
        alert("login successful");
      } else {
        alert("login failed, check your credential");
      }
    } catch (err) {
      alert("Something went wrong, please try it again: " + err.message);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <h3>Login page</h3>
          <input
            className="input-field"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          />
          <input
            className="input-field"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
          <button className="user-btn" type="submit">
            submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
