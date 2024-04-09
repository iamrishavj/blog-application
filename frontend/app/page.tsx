import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";

export default function Home() {
  return (
    <>
      <Navbar isLoggedIn={false} />
      All Blogs
    </>
  );
}
