import useNewsData from "../../Hooks/NewsData";
import News from "./News";


const HomeNews = () => {

  const allNews = useNewsData()



  return (
    <div>
      <h2 className="text-xl font-bold">Dragon News Home</h2>
      {
        allNews.map(news => <News key={news.id} news={news}></News>)
      }
    </div>
  );
};

export default HomeNews;