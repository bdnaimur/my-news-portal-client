import React, { useEffect, useState } from "react";
import { useContext } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { userContext } from "../../Client/Client";
import PostItems from "./PostItems";

const Post = () => {
  const [logginUser, setLoggedinUser] = useContext(userContext);
  console.log(logginUser);
  const [recall, setRecall] = useState(0);
  let count = 0;
  const [postData, setPostData] = useState([]);
  console.log(postData);
  useEffect(() => {
    fetch("http://localhost:9999/posts")
      .then((res) => res.json())
      .then((data) => {
        if(logginUser.userLevel<10){
        setPostData(data.reverse());
        }
        else{
          console.log("data",data);
          const sortedData = data.filter(singleData=>singleData.userId == logginUser.userId).reverse();
          console.log("sortedData",sortedData);
          setPostData(sortedData);
        }
      });
  }, [recall]);

  // delete action
  const handlePostDelete = (id) => {
    let deleteCount = postData.length + 1;
    fetch(`http://localhost:9999/deletePost/${id}`, {
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
  const displayUsers = postData
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((postItem) => {
      return (
        <PostItems
          id={++count}
          handlePostDelete={handlePostDelete}
          post={postItem}
        ></PostItems>
      );
    });

  const pageCount = Math.ceil(postData.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div id="admin-content">
      <div class="container">
        <div class="row">
          <div class="col-md-10">
            <h1 class="admin-heading">All Posts</h1>
          </div>
          <div class="col-md-2">
            <Link class="add-new" to="/addPost">
              add Post
            </Link>
          </div>
          <div class="col-md-12">
            <table class="content-table">
              <thead>
                <th>S.No.</th>
                <th>Title</th>
                <th>Category</th>
                <th>Date</th>
                <th>Author</th>
                <th>Edit</th>
                <th>Delete</th>
              </thead>
              <tbody>{displayUsers}</tbody>
            </table>
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
  );
};

export default Post;
