import React from 'react';
import { useParams, Link } from 'react-router-dom';

function UserDetail() {
  const { id } = useParams();
  return (
    <div>
      <h3>Viewing User {id}</h3>
      <Link to="edit">Edit this user</Link>
    </div>
  );
}

export default UserDetail;
