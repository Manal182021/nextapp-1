import Link from 'next/link';
export const dynamic = 'force-dynamic';
export async function generateMetadata() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: 'no-store',
  }
  );
  if (!res.ok) {
    return { title: 'post not founded', description: 'not found' }
  }
  const users = await res.json();
  return {
    title: ` ${users.username} | nextApp`,
    description :`${users.email}`
}
 }
export default async function AppSSR() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: 'no-store',
  }
  );
  const users = await res.json();

  return (
    <div>
           <h2 className=" flex justify-center text-[40px] text-[#6a4392] font-bold ">
        Users
      </h2>
    <div className='text-center flex  justify-center  lg:justify-between h-full pt-[20px] '>
      <div className='left pl-[100px]'>
      <ul className='text-center '>
        {users.map((user) => (
          <li key={user.id} className="bg-[#6a4392] rounded-2xl text-center p-[10px] text-[17px] text-white hover:translate-y-[-10px] transition-all duration-150 hover:cursor-pointer  mb-[15px] w-[400px]">
           <Link href={`/users/${user.id}`}>{user.username}</Link> 
          </li>
        ))}
        </ul>
      </div>
      <div className='right pr-[100px]'>
        <img src={'/images/users.jpg'} className='rounded-2xl mb-[30px]'></img>
      </div>
    </div>
    </div>
  )
}
