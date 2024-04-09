"use client";

import { useRouter } from "next/navigation";

const BackToHomeButton: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed top-2 right-4 z-50 hover:scale-110 transition-transform duration-100"
    >
      <svg
        fill="#000000"
        width={24}
        height={24}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z"
          fillRule="evenodd"
        />
      </svg>
    </button>
  );
};

export default BackToHomeButton;
