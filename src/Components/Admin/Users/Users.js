import React, { useEffect, useState, useContext } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import UserItem from "./UserItem";
import { userContext } from '../../Client/Client';
const Users = () => {
  const [logginUser, setLoggedinUser] = useContext(userContext);
  const [userData, setUserData] = useState([]);
  const [recall, setRecall] = useState(0);
  let count = 0;
  console.log(userData);
  useEffect(() => {
    fetch("https://frozen-temple-20129.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data.reverse());
      });
  }, [recall]);

  // delete action
  const handleuserDelete = (id) => {
    let deleteCount = userData.length + 1;
    fetch(`https://frozen-temple-20129.herokuapp.com/deleteUser/${id}`, {
      method: "DELETE",
    }).then((result) => {
      if (result) {
        setRecall(deleteCount - 1);
      }
    });
  };
   // pagination

   const [pageNumber, setPageNumber] = useState(0);
   const usersPerPage = 5;
   const pagesVisited = pageNumber * usersPerPage;
 
   const displayUsers = userData
     .slice(pagesVisited, pagesVisited + usersPerPage)
     .map((userItem) => {
       return (
        <UserItem
        user={userItem}
        handleuserDelete={handleuserDelete}
        id={++count}
      />
       );
     });
 
   const pageCount = Math.ceil(userData.length / usersPerPage);
    const changePage = ({ selected }) => {
     setPageNumber(selected);
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
                {logginUser.userLevel===5 &&
                <>
                <th>Edit</th>
                <th>Delete</th>
                </>}
              </thead>
              <tbody>
                {displayUsers}
              </tbody>
            </table>
            <div className="offset-md-3 col-md-6 mt-3">
            <ReactPaginate
                    previousLabel={"Prev"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
