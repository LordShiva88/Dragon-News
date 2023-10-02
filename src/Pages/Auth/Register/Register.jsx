import { Link } from "react-router-dom";
import BreakingNews from "../../Home/BreakingNews";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";

const Register = () => {
  return (
    <div className="space-y-5 mt-5">
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="md:w-2/3 mx-auto my-10">
        <h1 className="text-xl text-center font-bold -tight ">
          Register your account
        </h1>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="imgURL"
              placeholder="Image Url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <p href="">Already Have an account? <Link to={'/login'} className="text-red-500" >Log In</Link> </p>
        </form>
        
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
