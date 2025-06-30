import React from 'react';
import { useParams } from 'react-router-dom';

function UserEdit() {
  const { id } = useParams();
  return <h3>Editing User {id}</h3>;
}

export default UserEdit;
