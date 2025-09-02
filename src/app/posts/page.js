import Link from "next/link";

export const dynamic = "force-static";

export const metadata = {
  title: "Posts",
  description: "List of posts",
};

export default async function AppSSG() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div className="h-full bg-gray-900 pt-[100px] ">
      <h2 className=" flex justify-center text-[40px] text-[#6a4392] mb-[50px]">
        our new posts
      </h2>
      <ul className="grid md:grid-cols-4 grid-cols-2 gap-5">
        {posts.map((post) => (
          <li
            key={post.id}
            className="bg-[#6a4392] rounded-2xl text-center p-[10px] text-[17px] text-white hover:scale-y-[1.3] transition-all duration-150 hover:cursor-pointer "
          >
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
