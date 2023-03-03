import React, { useState, useEffect } from 'react';

function App() {
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
    <div>
      <h1>Admin</h1>
      <ul>
        {data.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
