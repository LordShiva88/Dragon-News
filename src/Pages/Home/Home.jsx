import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import HomeNews from "./HomeNews";

const Home = () => {
  return (
    <div className="space-y-5 mt-10">
      <Header></Header>
      <BreakingNews/>
      <Navbar></Navbar>

      <div className="grid gap-6 md:grid-cols-4 grid-cols-1">
        <div className="">
        <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2">
          <HomeNews></HomeNews>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
