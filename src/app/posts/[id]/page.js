
export const dynamic = "force-static";

export const metadata = {
  title: "Posts Detail",
  description: "This is the details page for posts",
};

export default async function PostDetail({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await res.json();

  return (
    <div className="h-[100vh] bg-gray-900">
      <h2 className="flex justify-center text-[23px] text-white pt-[200px] mb-[50px] ">
        {post.title}
      </h2>
      <p className=" text-[17px] text-gray-400 text-center pb-[50px] w-[50%] m-auto leading-[1.8] ">{post.body}</p>
    </div>
  );
}
