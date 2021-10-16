import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import CategoryItems from "./CategoryItems";


const Category = () => {
  const [recall, setRecall] = useState(0);
  // const [editComponent, setEdtiComponent] = useState(false);
  // const [editValue, setEditValue] = useState("");
  let count = 0;
  const [catData, setCatData] = useState([]);
  const [categoryName, setCategoryName] = useState([]);
  console.log(categoryName);
  useEffect(() => {
    fetch("https://intense-fjord-22962.herokuapp.com/categories")
      .then((res) => res.json())
      .then((data) => {
        setCatData(data.reverse());
      });
  }, [recall]);
  // finding no of posts

  useEffect(() => {
    const array = [];
    fetch("https://intense-fjord-22962.herokuapp.com/posts")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item) => {
          array.push(item.category);
        });
        setCategoryName(array);
      });
  }, []);

  // delete action
  const handleCategoryDelete = (id) => {
    let deleteCount = catData.length + 1;
    fetch(`https://intense-fjord-22962.herokuapp.com/deleteCategory/${id}`, {
      method: "DELETE",
    }).then((result) => {
      if (result) {
        setRecall(deleteCount - 1);
      }
    });
  };
  // edit action
  const handleEditCategory = (e) => {
    alert("Update is coming soon");
    // setEdtiComponent(true);
    // const editData = catData.filter(data => e === data._id);
    // setEditValue(editData[0]);
  };

  // pagination

  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = catData
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((catItem) => {
      return (
        <CategoryItems
          handleEditCategory={handleEditCategory}
          handleCategoryDelete={handleCategoryDelete}
          newkey={++count}
          cateItem={catItem}
        />
      );
    });

  const pageCount = Math.ceil(catData.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <div id="admin-content">
        <div class="container">
          <div class="row">
            <div class="col-md-10">
              <h1 class="admin-heading">All Categories</h1>
            </div>
            <div class="col-md-2">
              <Link class="add-new" to="/addCategory">
                add category
              </Link>
            </div>
            <div class="col-md-12">
              <table class="content-table">
                <thead>
                  <th>S.No.</th>
                  <th>Category Name</th>
                  <th>No. of Posts</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </thead>
                <tbody>
                  {displayUsers}                  
                </tbody>
              </table>
            </div>
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
    </>
  );
};

export default Category;
