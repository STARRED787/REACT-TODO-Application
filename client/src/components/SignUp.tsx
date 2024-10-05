import { Link } from "react-router-dom";
import signImage from "../images/sign-up.jpg";

function SignUp() {
  return (
    <div>
      <div className="flex h-screen bg-white ">
        {/* Left Side (Text) */}
        <div className="w-full mr-10 md:w-3/4 flex justify-center items-center">
          <div className="text-center text-black">
            <h1 className="font-extrabold text-5xl">DUN.</h1>

            <div className="justify-center items-center">
              <div className="text-slate-500 font-semibold">
                <p>Welcome</p>
                <p>Lets Create Your Account</p>
              </div>

              <form
                action=""
                method="post"
                className="flex flex-col justify-center items-center mt-4 "
              >
                <input
                  type="text"
                  className="w-[270px] bg-slate-300 rounded-[20px] border-none p-2 md:w-[300px] text-center mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Your Name"
                />
                <button
                  type="submit"
                  className="rounded-[20px] w-[270px] md:w-[300px] mt-4 bg-blue-300 text-black font-semibold py-2 px-4 hover:bg-blue-400 transition duration-300"
                >
                  Genarate UserName
                </button>

                <button
                  type="submit"
                  className="rounded-[20px] w-[270px] md:w-[300px] mt-4 bg-green-300 text-black font-semibold py-2 px-4 hover:bg-green-400 transition duration-300"
                >
                  Sign Up
                </button>
                <p className=" font-semibold mt-1">
                  You have an account?
                  <span className="text-blue-500">
                    <Link to="/">Log in</Link>
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="hidden md:flex md:w-3/4 justify-center items-center">
          <div className="text-center text-black mr-[10rem] md:w-3/3">
            <img src={signImage} alt="Sign In" className="p-4 rounded-[70px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
