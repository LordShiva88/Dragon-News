import {
  FaBookmark,
  FaShareAlt,
  FaStar,
  FaRegStar,
  FaEye,
} from "react-icons/fa";
import Rating from "react-rating";

const News = ({ news }) => {
  const {
    author,
    details,
    image_url,
    others_info,
    rating,
    thumbnail_url,
    title,
    total_view,
  } = news;

  return (
    <div>
      <div className="bg-base-200 p-3 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src={author.img} alt="" className="rounded-full w-12" />
          <div>
            <h2 className="font-bold">{author.name}</h2>
            <p>{author.published_date}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <FaBookmark></FaBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </div>
      <h2 className="text-xl font-bold">{title}</h2>
      <img src={image_url} alt="" />
      <div>
        {details.slice(0, 150)}
        <br />
        <a href="" className="text-orange-500">
          Read More
        </a>
        <hr />
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Rating
              emptySymbol={<FaRegStar></FaRegStar>}
              fullSymbol={<FaStar></FaStar>}
              initialRating={rating.number}
              readonly
            />
            <p>{rating.number}</p>
          </div>
          <div className="flex gap-2 items-center">
            <FaEye></FaEye>
            <p>{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
