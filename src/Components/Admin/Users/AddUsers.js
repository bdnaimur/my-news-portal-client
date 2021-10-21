import React, { useState } from 'react';
import { useHistory } from 'react-router';

const AddUsers = () => {
    const history = useHistory()
    const [userData, setuserData] = useState({});
    const handleUserSubmit = e =>{
            e.preventDefault();
            const url = `http://localhost:9999/addUser`;
            fetch(url, {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(userData),
            })
            .then(response => response.json())
            .then((res) => {
                if(res){
                    history.push("/users");
                }
            });
            e.target.reset();
        
    }

    const handleBlur = e =>{
        const insertUserData = { ...userData};
        insertUserData[e.target.name] = e.target.value;
        setuserData(insertUserData);
    }
    
    return (
        <div id="admin-content">
        <div class="container">
          <div class="row">
              <div class="col-md-12">
                  <h1 class="admin-heading">Add User</h1>
              </div>
              <div class="offset-md-3 col-md-6">
                  {/* <!-- Form Start --> */}
                  <form  onSubmit={handleUserSubmit} autocomplete="off">
                      <div class="form-group">
                          <label>First Name</label>
                          <input type="text" onBlur={handleBlur} name="fName" class="form-control" placeholder="First Name" required/>
                      </div>
                          <div class="form-group">
                          <label>Last Name</label>
                          <input type="text" onBlur={handleBlur} name="lName" class="form-control" placeholder="Last Name" required/>
                      </div>
                      <div class="form-group">
                          <label>User Name</label>
                          <input type="text" onBlur={handleBlur} name="username" class="form-control" placeholder="Username" required/>
                      </div>
                      <div class="form-group">
                          <label>User Id</label>
                          <input type="text" onBlur={handleBlur} name="userId" class="form-control" placeholder="Insert a Number" required/>
                      </div>

                      <div class="form-group">
                          <label>Password</label>
                          <input type="password" onBlur={handleBlur} name="password" class="form-control" placeholder="Password" required/>
                      </div>
                      <div class="form-group">
                          <label>User Role</label>
                          <select class="form-control" onBlur={handleBlur} name="role" >
                              <option disabled selected>Select User</option>
                              <option value="15">Normal User</option>
                              <option value="10">Super User</option>
                          </select>
                      </div>
                      <input type="submit"  name="save" class="btn btn-primary" value="Save" required />
                  </form>
                   {/* <!-- Form End--> */}
               </div>
           </div>
       </div>
       </div>
    );
};

export default AddUsers;