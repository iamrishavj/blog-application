const RegisterPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Register</h1>
      <form className="flex flex-col gap-4 md:w-1/4">
        <input
          type="text"
          placeholder="Username"
          className="border border-gray-300 px-4 py-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Full Name"
          className="border border-gray-300 px-4 py-2 rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 px-4 py-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 px-4 py-2 rounded"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="border border-gray-300 px-4 py-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
