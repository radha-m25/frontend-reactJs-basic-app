import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

      const data = await response.json();

      if(response.ok) {
        console.log("login successful" + data);
      }else{
        console.log("login failed" + data);
      }
    }catch(err) {
      console.log("Something went wrong, please try it again: " + err.message);
    }
  };
  return (
    <>
      <h3>Login page</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
          <input
            style={{ margin: "20px 20px" }}
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            style={{ margin: "20px 20px" }}
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button style={{ width: "50%", margin: "20px 20px" }} type="submit">
            submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
