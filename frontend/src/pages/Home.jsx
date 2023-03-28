import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/todos`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col gap-10 items-center pt-10">
      <h1 className="text-4xl">Todo lists</h1>
      <div className="w-1/2 flex flex-col">
        <button
          className="self-end px-6 py-2 bg-teal-500"
          onClick={() => navigate('/create')}
        >
          New
        </button>
        <table className="table-auto w-full mt-4">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Type</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((todo) => (
              <tr key={todo._id}>
                <td className="border px-4 py-2">{todo.name}</td>
                <td className="border px-4 py-2">{todo.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
