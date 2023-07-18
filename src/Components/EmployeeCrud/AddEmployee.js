import React, { useState } from 'react';

const AddEmployee = () => {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const employee = {
      name: name,
      job: job,
    };

    fetch   ('https://localhost:44375/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employee),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('New employee ID:', data);
        // Reset the form fields
        setName('');
        setJob('');
        setSuccessMessage('New employee ID:' + data);
      });
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Add Employee</button>
      </form>

      {successMessage ?  <h2>New employee added: {successMessage}</h2> : null}

     

    </div>
  );
};

export default AddEmployee;
