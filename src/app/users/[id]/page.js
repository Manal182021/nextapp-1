import Link from "next/link";

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    return { title: 'User not found', description: 'Not found' };
  }
  const user = await res.json();
  return {
    title: `${user.username} | nextApp`,
    description: `${user.email}`,
  };
}

export default async function UserDetails({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`, {
    cache: 'no-store',
  });
  const user = await res.json();

  return (
    <section className=" h-[100vh] w-[100%]">
    <div className="text-center mt-[200px] bg-gray-900 p-[20px] w-[40%]  m-auto rounded-4xl">
      <h3 className="flex justify-center text-[40px] text-[#b2a6bf]">
        {user.username}
      </h3>
      <h4>
        <Link href={`mailto:${user.email}`} className="text-blue-500 underline">
         Email : {user.email}
        </Link>
      </h4>
         <ul className="text-white text-[20px]">
            <li className="mt-[15px]">street  : {user.address.street}</li>  
            <li className="mt-[15px]">City : {user.address.city}</li>  
            <li  className="mt-[15px]">zipcode : {user.address.zipcode}</li>  
            <li className="mt-[15px]">suite :  {user.address.suite}</li>  
        </ul>
      </div>
      </section>
  );
}

