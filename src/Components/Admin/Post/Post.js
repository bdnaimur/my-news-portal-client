import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PostItems from "./PostItems";

const Post = () => {
  const [recall, setRecall] = useState(0);
  //   const [editComponent, setEdtiComponent] = useState(false);
  //   const [editValue, setEditValue] = useState("");
  let count = 0;
  const [postData, setPostData] = useState([]);
  console.log(postData);
  useEffect(() => {
    fetch("http://localhost:9999/posts")
      .then((res) => res.json())
      .then((data) => {
        setPostData(data);
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
  // edit action
  const handlePostEdit = (e) => {
      alert("Update is coming soon");
    // setEdtiComponent(true);
    // const editData = postData.filter(data => e === data._id);
    // setEditValue(editData[0]);
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
              <tbody>
                {postData.map((post) => (
                  <PostItems
                    id={++count}
                    handlePostDelete={handlePostDelete}
                    handlePostEdit={handlePostEdit}
                    post={post}
                  ></PostItems>
                ))}
              </tbody>
            </table>
            {/* <ul class='pagination admin-pagination'>
                        <li class="active"><a>1</a></li>
                        <li><a>2</a></li>
                        <li><a>3</a></li>
                    </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
