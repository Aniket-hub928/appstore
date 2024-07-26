import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AppList() {
  const [applications, setApplications] = useState([]);
  const navigate = useNavigate();

  // Fetch applications from the server
  function fetchApplications() {
    axios.get('http://localhost:4300/applications')
      .then(response => {
        setApplications(response.data);
      })
      .catch(error => {
        console.log('There was an error fetching the applications data!', error);
      });
  }

  useEffect(() => {
    fetchApplications();
  }, []);

  // Handle delete operation
  function handleDelete(id) {
    if (window.confirm('Are you sure you want to delete this application?')) {
      axios.delete(`http://localhost:4300/applications/${id}`)
        .then(() => {
          fetchApplications(); // Refresh the list after deletion
        })
        .catch(error => {
          console.log('There was an error deleting the application data!', error);
        });
    }
  }

  return (
    <div className="h-100 p-5 text-bg-secondary">
      <div className="container mt-4">
        <h2 className="text-center mb-4">Application List</h2>
        <div className="row">
          {applications.length > 0 ? (
            applications.map(app => (
              <div className="col-md-4" key={app.id} style={{ marginTop: '2%' }}>
                <div className="card application-list-container">
                  <div className="card-body">
                    <ul className="list-group" style={{ listStyleType: 'none' }}>
                      <li className="app-text" style={{ textAlign: 'center' }}>
                        <h5 className="card-title">{app.name}</h5>
                      </li>
                      <li className="app-text">Description: {app.description}</li>
                      <li className="app-text">Release Date: {app.releaseDate}</li>
                      <li className="app-text">Version: {app.version}</li>
                      <li className="app-text">Ratings: {app.ratings}</li>
                      <li className="app-text">Genre: {app.genre}</li>
                      <li className="app-text">Category: {app.category}</li>
                    </ul>
                    <div className="d-flex justify-content mt-3">
                      <button type="button" className="btn btn-danger me-2" onClick={() => handleDelete(app.id)}>Delete</button>
                      <button type="button" className="btn btn-dark" onClick={() => navigate(`/update/${app.id}`)}>Update</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No applications found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AppList;