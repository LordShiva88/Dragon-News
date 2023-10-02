import {
  FaGoogle,
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="px-2">
        <h2 className="text-2xl font-bold">Login With</h2>
        <div className="space-y-3 mt-5">
          <button className="btn btn-outline w-full">
            <FaGoogle className="text-sky-500 text text-xl mr-2"></FaGoogle>
            Login with Google
          </button>
          <button className="btn btn-outline w-full">
            <FaGithub className="text-sky-500 text text-xl mr-2"></FaGithub>
            Login with GitHub
          </button>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8">Find Us On</h2>
      <div className="mt-5">
        <Link className="flex rounded-t-lg  items-center border p-2 ">
          <FaFacebookF className="text-sky-500 text text-xl mr-2"></FaFacebookF>
          Facebook
        </Link>
        <Link className="flex items-center border p-2 ">
          <FaTwitter className="text-sky-500 text text-xl mr-2"></FaTwitter>
          Twitter
        </Link>
        <Link className="flex items-center border p-2 rounded-b-lg ">
          <FaInstagram className="text-sky-500  text text-xl mr-2"></FaInstagram>
          Instagram
        </Link>
      </div>

      <div className="p-4 bg-base-200 mt-6">
        <h2 className="text-xl font-bold">Q-Zone</h2>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
