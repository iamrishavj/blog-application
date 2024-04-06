"use client";
import { useRouter } from "next/navigation";

const LinkToRegister = () => {
  const router = useRouter();
  return (
    <p className="text-center">
      Don't have an account?{" "}
      <a
        href="#"
        className="text-blue-500 hover:underline"
        onClick={() => router.push("/register")}
      >
        Register
      </a>
    </p>
  );
};

export default LinkToRegister;
