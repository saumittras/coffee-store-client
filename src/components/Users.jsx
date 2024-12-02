import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const Users = () => {
  const { users, setUsers } = useContext(AuthContext);
  const loadedUsers = useLoaderData();
  setUsers(loadedUsers);
  console.log(loadedUsers);

  const handleUserDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //delete from data base
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const newUsers = users.filter((use) => use._id !== id);
              setUsers(newUsers);
            }
          });
      }
    });
  };
  return (
    <div>
      <h2 className="text-center text-3xl">Users:{users.length}</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Last Logedin</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={user._id}>
                  <th>{idx + 1}</th>
                  <td>{user.name}</td>
                  <td>email: {user.email}</td>
                  <td>{user?.lastSignInTime}</td>
                  <td>
                    <button
                      onClick={() => handleUserDelete(user._id)}
                      className="btn"
                    >
                      X
                    </button>
                    <button className="btn">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
