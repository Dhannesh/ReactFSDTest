import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Card from "./Card";

const Search = () => {
  const { state } = useLocation();
  const [searchValue, setSearch] = useState(state.searchValue);
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const url = `https://dummyjson.com/posts/search?q=${searchValue}`;
  const loadData = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();
    setProducts(data.posts);
    console.log(products);

    setCount(data.total);
    console.log(count);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    loadData(url);
  };
  useEffect(() => {
    loadData(url);
  }, []);

  return (
    <>
      <div className="searchPage">
        <div className="home">
          <a href="/">Home</a>
        </div>

        <div className="search">
          <input
            type="text"
            name=""
            id=""
            placeholder="search posts..."
            value={searchValue}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <div className="products">
          {count > 0 ? (
            products.map((product) => <Card key={product.id} data={product} />)
          ) : (
            <h2>No records Found</h2>
          )}
        </div>
      </div>
    </>
  );
};
export default Search;
