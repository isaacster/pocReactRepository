import React, { useState } from 'react';

const ViewEmployee = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [employee, setEmployee] = useState(null);

  const handleViewEmployee = () => {
    fetch(`https://localhost:44375/employees/${employeeId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Employee not found');
        }
        return response.json();
      })
      .then((data) => setEmployee(data))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>View Employee</h2>
      <div>
        <label>
          Employee ID:
          <input
            type="text"
            value={employeeId}
            onChange={(event) => setEmployeeId(event.target.value)}
          />
        </label>
      </div>
      <button onClick={handleViewEmployee}>View Employee Details</button>

      {employee && (
        <div>
          <h3>Employee Details</h3>
          <p>Name: {employee.name}</p>
          <p>Job: {employee.job}</p>
          {/* Add other employee details here */}
        </div>
      )}
    </div>
  );
};

export default ViewEmployee;
