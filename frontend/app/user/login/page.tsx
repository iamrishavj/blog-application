"use client";

import { loginUser } from "@/actions/userActions";
import LinkToRegister from "./linkToRegister";
import { useFormState } from "react-dom";

const LoginPage: React.FC = () => {
  const [error, wrappedLoginUser] = useFormState(loginUser, undefined);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-64">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form className="space-y-4" action={wrappedLoginUser}>
          <div>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Login
          </button>
          <LinkToRegister />
        </form>
        <div className="flex items-center justify-center">
          {error && <p className="text-red-500 </div>mt-4">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
