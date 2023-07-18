import React, { useState } from 'react';

const UpdateEmployee = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleUpdateEmployee = () => {
    const employee = {
      name: name,
      job: job,
    };

    fetch(`https://localhost:44375/employees/${employeeId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employee),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Employee not found');
        }
        setSuccessMessage('Employee updated successfully');        
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Update Employee</h2>
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
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Job:
          <input
            type="text"
            value={job}
            onChange={(event) => setJob(event.target.value)}
          />
        </label>
      </div>
      <button onClick={handleUpdateEmployee}>Update Employee</button>
      {successMessage ?  <h2>  {successMessage}</h2> : null}
    </div>
  );
};

export default UpdateEmployee;
