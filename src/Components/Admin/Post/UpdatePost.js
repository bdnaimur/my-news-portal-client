import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

const UpdatePost = () => {
  const [imageURL, setIMageURL] = useState(null);
  const {postId} = useParams();
  const history = useHistory();
  const [updateData, setUpdateData] = useState({
    title: "",
    description: "",
    category: "",
  });
console.log(updateData);
  const [postData, setPostData] = useState([]);
  console.log(postData);
  const [catData, setCatData] = useState([]);
    const newArray = [];
  if(catData.length>0){
      catData.forEach(data=>{
        if(data.category!==postData.category){
          newArray.push(data.category);
        }
      })
  }
  // cateory fetch
  useEffect(() => {
    fetch("https://intense-fjord-22962.herokuapp.com/categories")
      .then((res) => res.json())
      .then((data) => {
        setCatData(data);
      });
  }, []);
  useEffect(() => {
    fetch(`https://intense-fjord-22962.herokuapp.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => {
        setPostData(data);
      });
  }, [postId]);

  const hadnlePostUpdate = (e) => {
    e.preventDefault();
    const allData = { ...updateData, imgUrl: imageURL};
    fetch(`https://intense-fjord-22962.herokuapp.com/updatePost/${postId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(allData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          console.log(result);
          history.push("/post");
        }
      });
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
  const handleBlur = (e) => {
    const newUpdateData = {...updateData};
    newUpdateData[e.target.name] = e.target.value;
    setUpdateData(newUpdateData);
  };

  return (
    <div id="admin-content">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1 class="admin-heading">Update Post</h1>
          </div>
          <div class="offset-md-3 col-md-6">
            {/* <!-- Form for show edit--> */}
            <form onSubmit={hadnlePostUpdate}>
              <div class="form-group">
                <input
                  type="hidden"
                  name="post_id"
                  class="form-control"
                  defaultValue="1"
                  placeholder=""
                />
              </div>
              <div class="form-group">
                <label for="exampleInputTile">Title</label>
                <input
                  onBlur={handleBlur}
                  type="text"
                  name="title"
                  class="form-control"
                  id="exampleInputUsername"
                  defaultValue={postData.title}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1"> Description</label>
                <textarea
                onBlur={handleBlur}
                  name="description"
                  class="form-control"
                  required
                  rows="5"
                  defaultValue={postData.description}
                >
                </textarea>
              </div>
              <div class="form-group">
                <label for="exampleInputCategory">Category</label>
                <select class="form-control" name="category" onBlur={handleBlur}>
                  <option defaultValue={postData.category}>{postData.category}</option>
                   {newArray.map((data) => (
                    <option vlue={data}> {data}</option>
                  ))}
                </select> 
              </div>
              <div class="form-group">
                        <label for="">Post image</label>
                        {/* <input type="hidden" name="new-image"/> */}
                        <br />
                        <img  src={postData.imgUrl} height="150px"/>
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
                value="Update"
              />
            </form>
            {/* <!-- Form End --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePost;
