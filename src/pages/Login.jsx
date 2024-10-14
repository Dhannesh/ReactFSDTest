import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [isVisible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("please enter name");
    } else if (
      !email
        .trim()
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      alert("invalid email");
    } else if (!password.trim()) {
      alert("please password");
    } else {
      navigate("/", { state: { name, email } });
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="inputElement">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="inputElement">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inputElement">
          <label htmlFor="password">Name</label>
          <input
            type={isVisible ? "text" : "password"}
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={() => setVisible(!isVisible)}>
          Show Password
        </button>
        <button id="loginButton">Login</button>
      </form>
    </div>
  );
};
export default Login;
