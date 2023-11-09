// import React, { useState } from 'react';
// import './UserTable.css'; // Import the CSS file for styling
// const UserTable = () => {
//   const [users, setUsers] = useState([]);
//   const [showTable, setShowTable] = useState(false);

//   const fetchData = () => {
//     // Fetch data from the API
//     fetch('https://reqres.in/api/users')
//       .then(response => response.json())
//       .then(data => {
//         // Update the state with the fetched users data
//         setUsers(data.data);
//         setShowTable(true);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   };

//   return (
//     <div >
//       <button className="btn" onClick={fetchData}>Fetch Data</button>
//       <table>
//         <thead>
//           <tr>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Email</th>
//             <th>Avatar</th>
//           </tr>
//         </thead>
//         <tbody>
//           {showTable && users.length > 0 ? (
//             users.map(user => (
//               <tr key={user.id}>
              
//                 <td>{user.first_name} </td>
//                <td> {user.last_name}</td>
//                 <td>{user.email}</td>
//                 <td><img src={user.avatar} alt="avatar" width="50" /></td>
//               </tr>
//             ))
//           ) : showTable && users.length === 0 ? (
//             <tr>
//               <td colSpan="4">No data found</td>
//             </tr>
//           ) : null}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UserTable;


import React, { useState } from 'react';
import './UserTable.css'; // Import the CSS file for styling

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const fetchData = () => {
    // Fetch data from the API
    fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(data => {
        // Update the state with the fetched users data
        setUsers(data.data);
        setShowTable(true);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
  
    <div className="table-container">
        <div className='Heading'><h3>Blue Whales</h3>
         <button className="btn" onClick={fetchData}>Get User List</button>
         
    </div>
        
        <div>
        <table>
        <thead>
          <tr className='head'>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {!showTable && users.length === 0 && (
            <tr className='data'>
              <td colSpan="4">No data found</td>
            </tr>
          )}
          {showTable && users.map(user => (
            <tr key={user.id} className='userDetails'>
            
              <td>{user.first_name} </td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td><img src={user.avatar} alt="avatar" width="50" /></td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
     
      {!showTable && users.length > 0 && <p>No data found</p>}
      
    </div>
  );
};

export default UserTable;


