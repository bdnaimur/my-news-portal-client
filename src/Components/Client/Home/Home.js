import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import PostItem from './PostItem';
import SliderShow from "./SliderShow";
const Home = () => {
  const [postData, setPostData] = useState([]);
 
  const slideArray = [].slice(0,4);
  console.log(slideArray);
  useEffect(() => {
    fetch("http://localhost:9999/posts")
      .then((res) => res.json())
      .then((data) => {
        
        setPostData(data.reverse());
      })

  }, []);
  postData.forEach(image => {
    slideArray.push(image.imgUrl);
  });
  // details action
  const handlePostDetails = (id) => {
    // let deleteCount = postData.length + 1;
    // fetch(`http://localhost:9999/deletePost/${id}`, {
    //   method: "DELETE",
    // }).then((result) => {
    //   if (result) {
    //     setRecall(deleteCount - 1);
    //   }
    // });
  };

  return (
    <div id="main-content">
      <div class="container">
        <div class="row">
        <div class="offset-md-2 col-md-8">
          {postData.length && <SliderShow postData={slideArray}/>}
        </div>
        </div>
        <div class="row">
          <div class="col-md-8">
            {/* <!-- post-container --> */}
            <div class="post-container">
              {postData.map(post => <PostItem post = {post}></PostItem>)}
            </div>
            {/* <!-- /post-container --> */}
          </div>
          <Sidebar postData={postData} />
          {/* <?php include 'sidebar.php'; ?> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
