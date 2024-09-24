// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const FacultiesDetails = () => {
//   const location = useLocation();
//   const branch = location.state?.branch; // Access the branch passed through location state
//   const facultyData = location.state?.data; // Access the data passed through location state

//   // Group faculty by designationType
//   const groupedByDesignation = facultyData.reduce((acc, faculty) => {
//     const { designationType } = faculty;
//     if (!acc[designationType]) {
//       acc[designationType] = [];
//     }
//     acc[designationType].push(faculty);
//     return acc;
//   }, {});

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Faculty Details for {branch}</h1>
      
//       {facultyData && facultyData.length > 0 ? (
//         Object.keys(groupedByDesignation).map((designationType) => (
//           <div key={designationType} className="mb-6">
//             <h2 className="text-lg font-semibold">{designationType}</h2>
//             <ul className="list-disc pl-5">
//               {groupedByDesignation[designationType].map((faculty) => (
//                 <li key={faculty.id} className='faculty_card mb-2 p-2 border rounded shadow'>
//                   <strong>Name:</strong> {faculty.username} <br></br>
//                   <strong>Branch:</strong> {faculty.branch} <br /> 
//                   <strong>Institution:</strong> {faculty.institution} <br /> 
//                   <strong>Staff Type:</strong> {faculty.staffType}<br /> 
//                   <strong>Course:</strong> {faculty.course}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))
//       ) : (
//         <p>No faculty data available for this branch.</p>
//       )}
//     </div>
//   );
// }

// export default FacultiesDetails;

import React from 'react';
import { useLocation } from 'react-router-dom';
import './faculties_details.css'; 

const FacultiesDetails = () => {
  const location = useLocation();
  const branch = location.state?.branch; // Access the branch passed through location state
  const facultyData = location.state?.data; // Access the data passed through location state

  // Group faculty by designationType
  const groupedByDesignation = facultyData.reduce((acc, faculty) => {
    const { designationType } = faculty;
    if (!acc[designationType]) {
      acc[designationType] = [];
    }
    acc[designationType].push(faculty);
    return acc;
  }, {});

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Faculty Details for {branch}</h1>
      
      {facultyData && facultyData.length > 0 ? (
        Object.keys(groupedByDesignation).map((designationType) => (
          <div key={designationType} className="mb-6 ">
            <h2 className="text-lg font-semibold">{designationType}</h2>
            <ul id='catagory_faculty' className="list-disc pl-5">
              {groupedByDesignation[designationType].map((faculty) => (

                <li key={faculty.id} className='  faculty_card mb-2 p-2 border rounded shadow flex flex-col'>
                  <div className='details_each'>
                   <img src={faculty.image}></img>
                  <span><strong id='title'>Name:</strong> {faculty.username}</span>
                  <span><strong  id='title'>Branch:</strong> {faculty.branch}</span>
                  <span><strong  id='title'>Institution:</strong> {faculty.institution}</span>
                  <span><strong  id='title'>Staff Type:</strong> {faculty.staffType}</span>
                  <span><strong  id='title'>Course:</strong> {faculty.course}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No faculty data available for this branch.</p>
      )}
    </div>
  );
}

export default FacultiesDetails;
