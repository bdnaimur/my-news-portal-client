import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useHistory } from "react-router";
import { userContext } from "../../Client/Client";

const AddPost = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [imageURL, setIMageURL] = useState(null);
  const [postData, setPostData] = useState({
    title: "",
    description: "",
    category: "",
  });
  const history = useHistory();
  const [catData, setCatData] = useState([]);
  
  const newArray = [];
  if(catData.length>0){
      catData.forEach(data=>{
          newArray.push(data.category);
      })
  }


  // cateory fetch
  useEffect(() => {
    fetch("http://localhost:9999/categories")
      .then((res) => res.json())
      .then((data) => {
        setCatData(data);
      });
  }, []);

  const handlePostSubmit = (data) => {
    data.preventDefault();
    const date = new Date().toLocaleString();
    const allData = { ...postData, imgUrl: imageURL, date:date, userName: loggedInUser.userName, userId: loggedInUser.userId };
    console.log(allData);
    const url = `http://localhost:9999/addPost`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allData),
    })
    .then(res =>res.json())
    .then((data) => {
        history.push("/post")
    });
    data.target.reset();
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "d19020804cf08b620bfc1f44127a586c");
    imageData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setIMageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
      alert("Please wait for a while");
  };
  // get the selected option
  const handleSelect = (e) => {
    const insertSeletItem = { ...postData, category: e.target.value };
    setPostData(insertSeletItem);
  };
  // get the description
  const handleTextArea = (e) => {
    const insertDescriptionItem = { ...postData, description: e.target.value };
    setPostData(insertDescriptionItem);
  };
  // get the title
  const hanldeTitle = (e) => {
    const insertTitleItem = { ...postData, title: e.target.value };
    setPostData(insertTitleItem);
  };
  
  return (
    <div id="admin-content">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1 class="admin-heading">Add New Post</h1>
          </div>
          <div class="offset-md-3 col-md-6">
            {/* <!-- Form --> */}
            <form onSubmit={handlePostSubmit} enctype="multipart/form-data">
              <div class="form-group">
                <label for="post_title">Title</label>
                <input
                  type="text"
                  name="post_title"
                  onBlur={hanldeTitle}
                  class="form-control"
                  autocomplete="off"
                  required
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1"> Description</label>
                <textarea
                  name="postdesc"
                  onBlur={handleTextArea}
                  class="form-control"
                  rows="5"
                  required
                ></textarea>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Category</label>
                <select
                  name="category"
                  onChange={handleSelect}
                  class="form-control"
                >
                  <option value="" selected>
                    {" "}
                    Select Category
                  </option>
                  {newArray.map((data) => (
                    <option value={data}> {data}</option>
                  ))}
                </select>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Post image</label>
                <input
                  type="file"
                  onChange={(e) => handleImageUpload(e)}
                  name="fileToUpload"
                  required
                />
              </div>
              <input
                type="submit"
                name="submit"
                class="btn btn-primary"
                value="Save"
                required
              />
            </form>
            {/* <!--/Form --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
