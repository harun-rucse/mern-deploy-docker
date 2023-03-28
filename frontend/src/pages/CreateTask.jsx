import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateTask() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      type,
    };
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/todos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
      alert('Task created successfully');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-[450px] bg-indigo-950">
        <h1 className="text-2xl text-center">Create Task</h1>
        <form className="flex flex-col gap-8 mt-6 p-4 rounded">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              className="w-full bg-indigo-800 p-3 rounded"
              type="text"
              placeholder="Task name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Type</label>
            <input
              className="w-full bg-indigo-800 p-3 rounded"
              type="text"
              placeholder="Task type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-800 p-3"
            onClick={handleSubmit}
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateTask;
