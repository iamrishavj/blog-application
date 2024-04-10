import { getSession, getUserIdFromToken } from "@/lib/sessionHelper";
import CreateBlogPage from "./createBlogForm";

async function Page() {
  const token = getSession();
  console.log(token);
  if (!token) {
    return <div>Unauthorized</div>;
  }
  const decodedToken = await getUserIdFromToken(token);

  console.log(decodedToken);

  if (decodedToken === null) {
    return <div>Unauthorized</div>;
  }
  return <CreateBlogPage token={token} author={decodedToken.id} />;
}

export default Page;
