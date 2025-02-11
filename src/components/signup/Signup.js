import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [gender, setGender] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      firstName: firstName,
      email: email,
      password: password,
      phoneNum: phoneNum,
      gender: gender,
    };

    try {
      const response = await fetch("http://localhost:5000/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      // const data = await response.json();

      if (response.ok) {
        navigate("/login");
        alert("signup successful");
      } else {
        alert("signup failed, check your data is fulfilling the validations");
      }
    } catch (err) {
      alert("something went wrong, please try it again: " + err.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <h3>SIGNUP FORM</h3>
          <input
            className="input-field"
            name="firstName"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className="input-field"
            name="email"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input-field"
            name="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="input-field"
            name="phoneNum"
            type="text"
            placeholder="phone num"
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.value)}
          />
          <input
            className="input-field"
            name="gender"
            type="text"
            placeholder="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <button className="user-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Signup;
