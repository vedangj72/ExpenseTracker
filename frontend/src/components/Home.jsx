import React from 'react';
import useGetData from '../hooks/useGetdata';
import "../components/home.css"; // Import your external CSS file

function Home() {
  const url = "http://localhost:8000/api/expenses";
  const { data, loadingget, errorget } = useGetData(url);

  if (loadingget) {
    return <p>Loading...</p>;
  }

  if (errorget) {
    return <p>Error: {errorget.message}</p>;
  }

  return (
  
    <div className="container mt-2">
      <div className=' text-start'>
        <button> Post</button>
      </div>
      <table className='table table-bordered table-striped mt-4'>
        <thead className="thead-dark">
          <tr>
            <th>Amount</th>
            <th>Description</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.amount}</td>
              <td>{item.description}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
