import React from "react";
import Cards from "./Cards"; // Ensure this component is properly implemented
import './Filter.css'

const Filter = ({ FacultyData }) => {
    // Extract unique branches from FacultyData
    const uniqueBranches = [...new Set(FacultyData.map(item => item.branch).filter(Boolean))]; // Filter out null/undefined branches

    return (
        <div className="OO">
            {uniqueBranches.length === 0 ? (
                <p>No branches available</p> // Message when no branches
            ) : (
                uniqueBranches.map((branch) => (
                    <div className="ppp" key={branch}> {/* Use branch as a key if unique */}
                        {/* Filter the data for the current branch */}
                        <Cards branch={branch} data={FacultyData.filter(item => item.branch === branch)} />
                    </div>
                ))
            )}
        </div>
    );
}

export default Filter;
