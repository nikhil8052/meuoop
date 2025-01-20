// src/pages/UserList.js
'use client';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import '@fortawesome/fontawesome-free/css/all.min.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch users from the API
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/categories');
        if (!response.ok) throw new Error('Failed to fetch users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Delete user function
  const deleteUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/users/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Failed to delete user');
      // Refresh the user list after deleting
      setUsers(users.filter(user => user._id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  // Define columns for DataTable
  const columns = [
    { name: 'Name', selector: row => row.name, sortable: true },
    {
      name: 'Status',
      selector: row => (
        <span className={`badge ${row.status === 'active'? 'bg-success' : 'bg-danger'}`}>
          {row.status === 'active' ? 'Active' : 'Blocked'}
        </span>
      ),
      sortable: true,
    },
    {
      name: 'Actions',
      cell: (row) => (
        <div>
          {/* Edit button with icon */}
          <button
            className="btn btn-sm btn-primary mx-1"
            onClick={() => handleEditUser(row._id)}
            aria-label="Edit user"
          >
            <i className="fas fa-edit"></i>
          </button>
          {/* Delete button with icon */}
          <button
            className="btn btn-sm btn-danger"
            onClick={() => deleteUser(row._id)}
            aria-label="Delete user"
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      ),
    },
  ];

  // Placeholder edit user function
  const handleEditUser = (id) => {
    console.log('Edit user:', id);
    // You could set up a modal or redirect to a different page
  };

  // Custom style for the DataTable with a border
  const customStyles = {
    table: {
      style: {
        border: '1px solid #dee2e6', // Bootstrap light border color
      },
    },
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Elements </h3>
      <DataTable
        columns={columns}
        data={users}
        progressPending={loading}
        pagination
        highlightOnHover
        responsive
        customStyles={customStyles} // Add custom border style
      />
    </div>
  );
};

export default UserList;
