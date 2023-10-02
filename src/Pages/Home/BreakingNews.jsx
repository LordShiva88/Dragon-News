import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex bg-base-200 p-3">
      <button className="bg-[#D72050] mr-2 px-4 py-1 text-white font-semibold">Latest</button>
      <Marquee speed={100} pauseOnHover className="">
      Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
      </Marquee>
    </div>
  );
};

export default BreakingNews;
