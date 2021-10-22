import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Sidebar from "../Sidebar/Sidebar";
import MarqueTitle from "./MarqueTitle";
import PostItem from './PostItem';
import SliderShow from "./SliderShow";
const Home = () => {
  const [postData, setPostData] = useState([]);
  const sliderShowArray = postData.slice(0, 4);
  useEffect(() => {
    fetch("https://frozen-temple-20129.herokuapp.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPostData(data.reverse());
      })
  }, []);
  // pagination
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 4;
  const pagesVisited = pageNumber * usersPerPage;
  const displayUsers = postData
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((post) => {
      return (
        <PostItem post={post}></PostItem>
      );
    });

  const pageCount = Math.ceil(postData.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const titleString = postData.map
  return (
    postData.length ?
      <div id="main-content">
        <div className = "d-flex">
        <span className="breaking-news">Breaking News</span>
        {postData.length>2 &&
        <marquee width="100%" direction="right">
        <bold className="marque-font"><span className="marque-title">{postData[0].category}</span> {postData[0].title}</bold>
        <bold className="marque-font"><span className="marque-title">{postData[1].category}</span>  {postData[1].title}</bold>
        <bold className="marque-font"><span className="marque-title">{postData[2].category}</span>  {postData[2].title}</bold>
      </marquee>
        }
        </div>
        {postData.length && <SliderShow postData={sliderShowArray} />}
        <div class="container">
          <div class="row">
            <div class="col-md-12">

            </div>
          </div>
          <div class="row">
            <div class="col-md-8 ">
              {/* <!-- post-container --> */}
              <div class="post-container">
                {displayUsers}
                <div className="mx-auto">
                  <ReactPaginate style={{ "width": "100%" }}
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

              {/* <!-- /post-container --> */}
            </div>
            <Sidebar postData={postData} />
            {/* <?php include 'sidebar.php'; ?> */}
          </div>
        </div>
      </div>
      :
      <div className="center">
        <div class="spinner-border text-info spinner" role="status">
        <span class="sr-only"></span>
      </div>
      </div>
  );
};

export default Home;
