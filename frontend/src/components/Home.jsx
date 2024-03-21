import React from 'react';
import useGetData from '../hooks/useGetdata';
import "../components/home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const url = "http://localhost:8000/api/expenses";
  const { data, loadingget, errorget } = useGetData(url);
  const navigate = useNavigate();

  if (loadingget) {
    return <p className="loading-message">Loading...</p>;
  }

  if (errorget) {
    return <p className="error-message">Error: {errorget.message}</p>;
  }

  const postbtn = () => {
    navigate("/Post");
  };
  const Viewbtn=(e)=>{
    console.log(e.target._id);
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-end mb-3 m-4">
        <button className="btn btn-primary" onClick={postbtn}>Post</button>
      </div>
      <table className='table table-bordered table-striped mt-4'>
        <thead className="thead-dark">
          <tr>
            <th>Amount</th>
            <th>Description</th>
            <th>Category</th>
            <th>Information</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.amount}</td>
              <td>{item.description}</td>
              <td>{item.category}</td>
              <td>
                <button className="btn btn-success text-center" onClick={Viewbtn}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
