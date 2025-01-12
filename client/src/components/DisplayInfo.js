import React, { useState, useEffect } from "react";
import { readData } from "./jsonToBackendApi";

const DisplayInfo = () => {
  const [admin, setAdmins] = useState([]);

  useEffect(() => {
    let mounted = true;
    readData("admin").then((data) => {
      if (mounted) {
        setAdmins(data);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div>
      <h3>Admin</h3>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Date of Birth</th>
              <th>Work Experience</th>
              <th>Resume Title</th>
              <th>Current Location</th>
              <th>Postal Address</th>
              <th>Current Employer</th>
              <th>Current Designation</th>
            </tr>
          </thead>
          <tbody>
            {admin &&
              admin.map((u) => (
                <tr key={u._id}>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.mobile}</td>
                  <td>{new Date(u.dob).toLocaleDateString()}</td>
                  <td>{u.workExperience || "N/A"}</td>
                  <td>{u.resumeTitle || "N/A"}</td>
                  <td>{u.currentLocation || "N/A"}</td>
                  <td>{u.postalAddress || "N/A"}</td>
                  <td>{u.currentEmployer || "N/A"}</td>
                  <td>{u.currentDesignation || "N/A"}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayInfo;
