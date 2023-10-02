import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useNewsData from "../../../Hooks/NewsData";

const LeftSideNav = () => {
  const [categories, setCategory] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  const news = useNewsData();
  const { author, thumbnail_url, title } = news;

  console.log(news);

  return (
    <div>
      <div>
        <h2 className="text-xl font-bold">All Category</h2>
        {categories.map((category) => (
          <>
            <NavLink
              to={`/${category.id}`}
              key={category.id}
              className="block mt-2 text-center"
            >
              <button className="btn w-full btn-outline">
                {category.name}
              </button>
            </NavLink>
          </>
        ))}
      </div>
      {news.slice(0, 4).map((singleNews) => (
        <>
          <img src={singleNews.thumbnail_url} alt="" />
          <h2>{singleNews.title}</h2>
          <p>{singleNews.author.published_date}</p>
        </>
      ))}
    </div>
  );
};

export default LeftSideNav;
