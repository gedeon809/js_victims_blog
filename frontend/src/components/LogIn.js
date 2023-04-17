import "../index.css";
import { Footer } from "./Footer";
import { MidBanner } from "./MidBanner";
import { Posts } from "./Posts";

export const Login = () => {
  return (
    <>
      {/* LOGIN FORM SECTION */}
      <main className="w-full p-10 bg-gray-200 mb-2">
        <div className="flex flex-col justify-center m-auto w-5/12 border rounded bg-white">
          <section className="bg-black h-12 w-full mb-3 rounded-t"></section>
          <form className="flex flex-col justify-center items-center mx-3 my-2 p-1">
            <input
              className="border-black rounded border-2 w-11/12 mb-5 p-2 bg-gray-200"
              type="email"
              placeholder="Enter your email"
              required
            />
            <input
              className="border-black rounded border-2 w-11/12 mb-3 p-2 bg-gray-200"
              type="password"
              placeholder="Enter your password"
              required
            />
          </form>
          <p className="text-xs mb-5 w-10/12 m-auto">
            By signing up or logging in shows you agree to our terms and
            condition.
          </p>
          <a
            href="#"
            className="bg-black text-center text-white w-1/2 m-auto mb-4 px-2 py-1 rounded-sm font-semibold"
          >
            LOG IN
          </a>
          <a
            href="/signup"
            className="bg-black text-center text-white w-1/2 m-auto mb-8 px-2 py-1 rounded-sm font-semibold"
          >
            SIGN UP
          </a>
        </div>
      </main>

      {/* WHAT'S IN YOUR MIND SECTION */}
      <MidBanner />

      {/* POSTS SECTION  */}
      <Posts />

      {/* FOOTER SECTION */}
      <Footer />
    </>
  );
};
