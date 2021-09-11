import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserItem from "./UserItem";

const Users = () => {
  const [recall, setRecall] = useState(0);
  let count = 0;
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9999/users")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      });
  }, [recall]);

  // delete action
  const handleuserDelete = (id) => {
    let deleteCount = userData.length + 1;
    fetch(`http://localhost:9999/deleteUser/${id}`, {
      method: "DELETE",
    }).then((result) => {
      if (result) {
        setRecall(deleteCount - 1);
      }
    });
  };
  // edit action
  const handleUserEdit = (e) => {
    alert("Update is coming soon");
  };
  return (
    <div id="admin-content">
      <div class="container">
        <div class="row">
          <div class="col-md-10">
            <h1 class="admin-heading">All Users</h1>
          </div>
          <div class="col-md-2">
            <Link class="add-new" to="/addUser">
              add User
            </Link>
          </div>
          <div class="col-md-12">
            <table class="content-table">
              <thead>
                <th>S.No.</th>
                <th>Full Name</th>
                <th>User Name</th>
                <th>Role</th>
                <th>Edit</th>
                <th>Delete</th>
              </thead>
              <tbody>
                {userData.map((user) => (
                  <UserItem
                    user={user}
                    handleUserEdit={handleUserEdit}
                    handleuserDelete={handleuserDelete}
                    id={++count}
                  />
                ))}
              </tbody>
            </table>
            {/* <ul class="pagination admin-pagination">
              <li class="active">
                <a>1</a>
              </li>
              <li>
                <a>2</a>
              </li>
              <li>
                <a>3</a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
