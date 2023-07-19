import React, { useState } from 'react';
import GlobalContext from '../../Components/GlobalContext';

const DeleteEmployee = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleDelete = () => {
    fetch( `${GlobalContext.ApiUrl}/${employeeId}`, {
      method: 'DELETE', headers: GlobalContext.headers
    })
      .then((response) => {
        if (!response.ok) {
            setSuccessMessage(`Employee NOT deleted: ${employeeId}`); 
        }
        setSuccessMessage(`Employee deleted: ${employeeId}`);       
      
      })
      .catch((error) => setSuccessMessage(`Employee NOT deleted: ${employeeId}`) );
  };

  return (
    <div>
      <h2>Delete Employee</h2>
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
      <button onClick={handleDelete}>Delete Employee</button>
      {successMessage ?  <h2>  {successMessage}</h2> : null}
    </div>
  );
};

export default DeleteEmployee;
