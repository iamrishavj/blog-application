import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";
import { getSession } from "@/lib/sessionHelper";

export default function Home() {
  const session = getSession();
  return (
    <>
      <Navbar isLoggedIn={session ? true : false} />
      All Blogs
    </>
  );
}
