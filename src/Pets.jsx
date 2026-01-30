import { useState } from "react";
import "./Pets.css";

import pet1 from "./img/Pets1.png";
import pet2 from "./img/Pets2.png";
import pet3 from "./img/Pets3.png";
import pet4 from "./img/Pets4.png";

import pet5 from "./img/Pets4.png";
import pet6 from "./img/Pets3.png";
import pet7 from "./img/Pets2.png";
import pet8 from "./img/Pets1.png";

const firstPosts = [
  { id: 1, img: pet1, title: "Rescue pups pose as ghosts in festive photo shoot" },
  { id: 2, img: pet2, title: "Cat interrupts morning coffee on sunny Washington morning" },
  { id: 3, img: pet3, title: "New study finds dogs pay more attention to women" },
  { id: 4, img: pet4, title: "Petting dogs gives health benefit, even if they are not yours" },
];

const morePosts = [
  { id: 5, img: pet5, title: "Dogs can recognize familiar faces" },
  { id: 6, img: pet6, title: "Cats prefer calm voices from humans" },
  { id: 7, img: pet7, title: "Playing with pets reduces stress levels" },
  { id: 8, img: pet8, title: "Pets help build daily healthy routines" },
];

export default function Pets() {
  const [posts, setPosts] = useState(firstPosts);
  const [loaded, setLoaded] = useState(false);

  const loadMore = () => {
    setPosts([...posts, ...morePosts]);
    setLoaded(true);
  };

  return (
    <section className="pets">
      <h2 className="pets__title">Interacting with our pets</h2>

      <div className="pets__grid">
        {posts.map((post) => (
          <div key={post.id} className="pets__card">
            <img src={post.img} alt={post.title} />
            <p>{post.title}</p>
          </div>
        ))}
      </div>

      {!loaded && (
        <button className="pets__btn" onClick={loadMore}>
          See more
        </button>
      )}
    </section>
  );
}
