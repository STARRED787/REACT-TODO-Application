import signImage from "../images/sign-image.jpeg";

export default function SignIn() {
  return (
    <div className="flex h-screen bg-white container">
      {/* Left Side (Text) */}
      <div className="w-full md:w-3/4 flex justify-center items-center">
        <div className="text-center text-black">
          <h1 className="font-extrabold text-5xl">DUN.</h1>

          <div className="text-slate-500 font-semibold">
            <p>Welcome back</p>
            <p>Get your things DUN</p>
          </div>

          <form
            action=""
            method="post"
            className="flex flex-col justify-center items-center mt-4"
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
              Login In
            </button>
            <p className=" font-semibold mt-1">
              Don't have an account?
              <span className="text-blue-500">Log in</span>
            </p>
          </form>
        </div>
      </div>

      {/* Right Side (Image) */}
      <div className="hidden md:flex md:w-3/4 justify-center items-center">
        <div className="text-center text-black mr-[10rem] md:w-3/3">
          <img src={signImage} alt="Sign In" className="p-4 rounded-[70px]" />
        </div>
      </div>
    </div>
  );
}
