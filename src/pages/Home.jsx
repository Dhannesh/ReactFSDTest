import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchValue.trim()) {
      alert("Enter search keyword");
    } else {
      navigate("/search", { state: { searchValue } });
    }
  };
  return (
    <>
      <div className="container-home">
        <h1>Blog post website</h1>
        <div className="login">
          {state == null ? (
            <p>
              Please <a href="./login">Login</a>
            </p>
          ) : (
            <>
              <p>
                Hello, <strong>{state.name}</strong>
              </p>
              <p>
                Your email is <strong>{state.email}</strong>
              </p>
            </>
          )}
        </div>
        <div className="search">
          <input
            type="text"
            name=""
            id=""
            placeholder="search posts..."
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </>
  );
};
export default Home;
