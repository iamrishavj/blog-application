"use client";

import { registerUser } from "@/actions/userActions";
import { useFormState } from "react-dom";

const RegisterPage: React.FC = () => {
  const [error, wrappedRegisterUser] = useFormState(registerUser, undefined);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Register</h1>
      <form
        className="flex flex-col gap-4 md:w-1/4"
        action={wrappedRegisterUser}
      >
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="border border-gray-300 px-4 py-2 rounded"
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="border border-gray-300 px-4 py-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border border-gray-300 px-4 py-2 rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border border-gray-300 px-4 py-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Register
        </button>
      </form>
      <div className="flex items-center justify-center">
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default RegisterPage;
