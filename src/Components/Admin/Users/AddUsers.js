import React, { useState } from 'react';

const AddUsers = () => {
    const [userData, setuserData] = useState({
        fName:"",
        lName:"",
        username:"",
        password:"",
        role:""
    });
    const handleUserSubmit = e =>{
            e.preventDefault();
            const url = `https://intense-fjord-22962.herokuapp.com/addUser`;
            fetch(url, {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(userData),
            }).then((res) => console.log("server side response", res));
            e.target.reset();
        
    }

    const handleFirstName = e =>{
        const insertFName = { ...userData, fName: e.target.value };
        setuserData(insertFName);
    }
    const handlelastName = e =>{
        const insertLName = { ...userData, lName: e.target.value };
        setuserData(insertLName);
    }
    const handleUserName = e =>{
        const insertUsername = { ...userData, username: e.target.value };
        setuserData(insertUsername);
    }
    const handlePassWord = e =>{
        const insertPassword = { ...userData, password: e.target.value };
        setuserData(insertPassword);
    }
    const hadleuserRole = e =>{
        const insertRole = { ...userData, role: e.target.value };
        setuserData(insertRole);
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
                          <input type="text" onBlur={handleFirstName} name="fname" class="form-control" placeholder="First Name" required/>
                      </div>
                          <div class="form-group">
                          <label>Last Name</label>
                          <input type="text" onBlur={handlelastName} name="lname" class="form-control" placeholder="Last Name" required/>
                      </div>
                      <div class="form-group">
                          <label>User Name</label>
                          <input type="text" onBlur={handleUserName} name="user" class="form-control" placeholder="Username" required/>
                      </div>

                      <div class="form-group">
                          <label>Password</label>
                          <input type="password" onBlur={handlePassWord} name="password" class="form-control" placeholder="Password" required/>
                      </div>
                      <div class="form-group">
                          <label>User Role</label>
                          <select class="form-control" onBlur={hadleuserRole} name="role" >
                              <option disabled selected>Select User</option>
                              <option value="normalUser">Normal User</option>
                              <option value="SuperUser">Super User</option>
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