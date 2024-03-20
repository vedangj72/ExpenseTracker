import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Post() {
  const url = "http://localhost:8000/api/expenses"; // Change the URL to your API endpoint
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(url, data);
      setResponse(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mt-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="text"
            id="amount"
            {...register('amount', { required: true })}
            className="form-control"
            placeholder="Enter amount"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            {...register('description', { required: true })}
            className="form-control"
            placeholder="Enter description"
          />
        </div>

        <div className="form-group m-2 ">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            {...register('category', { required: true })}
            className="form-control"
            placeholder="Enter category"
          />
        </div>

        <button type="submit" className="btn btn-primary m-2" disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      {isLoading && <p className='text-center '>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {response && <p>Response: {JSON.stringify(response)}</p>}
    </div>
  );
}

export default Post;
