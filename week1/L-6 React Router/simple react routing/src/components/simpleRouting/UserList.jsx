import React from 'react';
import { Link } from 'react-router-dom';

function UserList() {
  return (
    <div>
      <h3>List of Users</h3>
      <Link to="1">Go to User 1 </Link><br/>
      <Link to="2">Go to User 2 </Link>
    </div>
  );
}

export default UserList;
