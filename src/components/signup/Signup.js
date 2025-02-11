import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [gender,setGender] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
        firstName: firstName,
        email: email,
        password: password,
        phoneNum: phoneNum,
        gender: gender
    }
    
    try {
        const response = await fetch('http://localhost:5000/user/signup',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
    
        // const data = await response.json();
    
        if(response.ok) {
            navigate("/login");
            alert("signup successful");
        }else{
            alert("signup failed, check your data is fulfilling the validations");
        }
    }catch(err){
        alert("something went wrong, please try it again: " + err.message);
    }

  };

  return (
    <>
      <p>SIGNUP FORM</p>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
          <input
            style={{ margin: "20px 20px" }}
            name="firstName"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            style={{ margin: "20px 20px" }}
            name="email"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            style={{ margin: "20px 20px" }}
            name="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            style={{ margin: "20px 20px" }}
            name="phoneNum"
            type="text"
            placeholder="phone num"
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.value)}
          />
          <input
            style={{ margin: "20px 20px" }}
            name="gender"
            type="text"
            placeholder="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <button style={{ width: "50%", margin: "20px 20px" }} type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Signup;
