import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Filter from "./Filter"; // Optional: for any specific styling

const FacultyDetails = () => {
  const [data, setData] = useState([]); // Initialize state for data
  const [loading, setLoading] = useState(true); // Initialize loading state
  const [error, setError] = useState(null); // Initialize error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(`https://restartsihproject.onrender.com/api/getallFaculty`);
        if (!resp.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await resp.json();
        setData(result); // Update state with fetched data
        console.log(result); // Log the fetched result
      } catch (error) {
        setError(error.message); // Set error message
      } finally {
        setLoading(false); // Set loading to false in both success and error cases
      }
    };

    fetchData(); // Call the function to fetch data
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <Navbar />
      {loading && <p>Loading...</p>} {/* Show loading message */}
      {error && <p className="error">Error: {error}</p>} {/* Show error message */}
      {!loading && !error && <Filter FacultyData={data} />} {/* Pass data to Filter component if no errors */}
    </div>
  );
};

export default FacultyDetails;
