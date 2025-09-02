import { title } from 'process';
import React from 'react'

export const dynamic = 'force-dynamic';
export async function generateMetadata() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    cache: 'no-store',
  }
  );
  if (!res.ok) {
    return { title: 'post not founded', description: 'not found' }
  }
  const todos = await res.json();
  return {
    title: ` ${todos.title} | nextApp`,
    description :`${todos.completed}`
}
 }
export default async function AppSSG() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    cache: 'no-store',
  }
  );
  const todos = await res.json();

  return (
    <div className='text-center m-auto bg-gray-900 '>
      <h2 className=" flex justify-center text-[40px] text-[#6a4392]">
      State of Todos
      </h2>
      <table className=' m-auto text-white p-[20px] border-2 border-red-400  rounded-2xl'>
        <thead className=' p-[20px] border-2'>
          <tr className='bg-gray-500 w-full'>
            <th>ID</th>
            <th>TITLE</th>
            <th>COMPLETED</th>
          </tr>
        </thead>
        <tbody className='bg-gray-500'>
          {todos.map((todo) => (
            <tr key={todo.id} className="hover:bg-gray-100 hover:text-black border-x-2 ">   
                  <td>
                    {todo.id}
                  </td>
                  <td>
                    {todo.title}
                  </td>
                  <td>
                    {todo.completed}
                  </td>
                </tr>
        ))}
        </tbody>
      </table>

    </div>
  )
}
