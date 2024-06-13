import React from 'react';
import useSelectedId from '../hooks/useSelectedId'; // Import the custom hook

function View() {
  const { selectedId } = useSelectedId(); // Get the selected ID from the custom hook

  console.log("Selected ID:", selectedId); // Log the selected ID to the console

  return (
    <div>
      <h1>View Page</h1>
      <p>Selected ID: {selectedId}</p>
    </div>
  );
}

export default View;
