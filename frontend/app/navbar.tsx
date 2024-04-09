import Link from "next/link";

const Navbar = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return (
    <nav className="flex items-center justify-end py-2 px-6">
      {!isLoggedIn ? (
        <Link href="/user/login" className="text-lg mr-4">
          Login
        </Link>
      ) : (
        <>
          <Link href="/my-blogs" className="text-lg mr-4">
            My Blogs
          </Link>
          <Link href="/user/account" className="text-lg mr-4">
            Account
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
