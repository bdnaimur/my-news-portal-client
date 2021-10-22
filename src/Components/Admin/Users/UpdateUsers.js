import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const UpdateUsers = () => {
    const {userId} = useParams();
    const history = useHistory();
  const [updateData, setUpdateData] = useState({
    fName:"",
    lName:"",
    username:"",
    role:""
});
console.log(updateData);
  const [userData, setUserData] = useState([]);
  console.log(userData);
  useEffect(() => {
    fetch(`https://frozen-temple-20129.herokuapp.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      });
  }, [userId]);

  const hadnleUserUpdate = (e) => {
    e.preventDefault();
    fetch(`https://frozen-temple-20129.herokuapp.com/updateUser/${userId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          console.log(result);
          history.push("/users");
        }
      });
  };
  const handleBlur = (e) => {
    const newUpdateData = {...updateData};
    newUpdateData[e.target.name] = e.target.value;
    setUpdateData(newUpdateData);
  };

    return (
        <div class="container">
          <div class="row">
              <div class="col-md-12">
                  <h1 class="admin-heading">Modify User Details</h1>
              </div>
              <div class="offset-md-4 col-md-4">
                  {/* <!-- Form Start --> */}
                  <form onSubmit={hadnleUserUpdate}  action="" method ="POST">
                      <div class="form-group">
                          <input type="hidden" name="user_id"  class="form-control" defaultValue="1" placeholder="" />
                      </div>
                          <div class="form-group">
                          <label>First Name</label>
                          <input type="text" onBlur={handleBlur} name="fName" class="form-control" defaultValue={userData.fName} placeholder="" required/>
                      </div>
                      <div class="form-group">
                          <label>Last Name</label>
                          <input type="text" onBlur={handleBlur} name="lName" class="form-control" defaultValue={userData.lName} placeholder="" required/>
                      </div>
                      <div class="form-group">
                          <label>User Name</label>
                          <input type="text" onBlur={handleBlur} name="username" class="form-control" defaultValue={userData.username} placeholder="" required/>
                      </div>
                      <div class="form-group">
                          <label>User Role</label>
                          <select class="form-control" onBlur={handleBlur} name="role" defaultValue="<?php echo $row['role']; ?>">
                              {userData.role === "SuperUser"?
                              (<><option defaultValue='Super User'>{userData.role}</option>
                              <option defaultValue="Normal User">Normal User</option></>):
                              (<><option defaultValue='Normal User'>{userData.role}</option>
                              <option defaultValue="Super User">Super User</option></>)}
                              
                            
                          </select>
                      </div>
                      <input type="submit" name="submit" class="btn btn-primary" value="Update" required />
                  </form>
                  {/* <!-- /Form --> */}
              </div>
          </div>
      </div>
    );
};


export default UpdateUsers;