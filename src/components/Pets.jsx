import { useEffect, useState } from "react";
import "./Pets.css";

const API_URL =
  "https://newsapi.org/v2/everything?q=pets&apiKey=8114696ab3e640d68152667ae91ccde4";

function App() {
  const [articles, setArticles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles || []));
  }, []);

  return (
    <div className="container">
      <h2 className="title">Interacting with our pets</h2>

      <div className="cards">
        {articles.slice(0, visibleCount).map((item, index) => (
          <div className="card" key={index}>
            <img
              src={item.urlToImage || "/img/Pets1.png"}
              alt={item.title}
            />
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      {visibleCount < articles.length && (
        <button
          className="see-more"
          onClick={() => setVisibleCount((prev) => prev + 4)}
        >
          See more
        </button>
      )}
    </div>
  );
}

export default App;
