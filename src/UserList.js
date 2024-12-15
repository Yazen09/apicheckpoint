import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]); // State pour stocker les utilisateurs

  useEffect(() => {
    // Appel API pour récupérer les données
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setListOfUsers(response.data); // Mettre à jour le state
      })
      .catch((error) => {
        console.error('Erreur lors du fetch des utilisateurs:', error);
      });
  }, []);

  return (
    <div>
      <h1>Liste des Utilisateurs</h1>
      <ul>
        {listOfUsers.map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
