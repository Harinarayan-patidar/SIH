import React from "react";
import './Cards.css'; 
import { NavLink } from "react-router-dom";

const Cards = ({ branch, data }) => {

    function openFacultyDetailsHandler() {
        console.log(`Viewing all faculty for: ${branch}`); 

    }

    return (
        
        <div className="card">
            <h2>{branch || 'Unknown Branch'}</h2>
            <div className="kkk">
                {data.length === 0 ? (
                    <p>No data available for this branch</p>
                ) : (
                    <div className="main">
                    <div className="cards_categories" key={data[0].id}> {/* Use the first faculty's ID for the key */}
                        <div className="branch_card">
                            <p id="card_header">Click the button to view all faculty members of {branch}.</p>
                            <NavLink to="/faculties_details" state={{ branch, data }}> {/* Pass branch and data as state */}
                                <button className="btn" onClick={openFacultyDetailsHandler}>
                                    ALL Faculties
                                </button>
                            </NavLink>
                        </div>
                    </div>
                    </div>
                )}
            </div>
        </div>
    
    );
}

export default Cards;
