import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryItems from "./CategoryItems";

const Category = () => {
  const [recall, setRecall] = useState(0);
  // const [editComponent, setEdtiComponent] = useState(false);
  // const [editValue, setEditValue] = useState("");
  let count = 0;
  const [catData, setCatData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9999/categories")
      .then((res) => res.json())
      .then((data) => {
        setCatData(data);
      });
  }, [recall]);

  // delete action
  const handleCategoryDelete = (id) => {
    let deleteCount = catData.length+1;
    fetch(`http://localhost:9999/deleteCategory/${id}`, {
      method: "DELETE",
    }).then((result) => {
      if (result) {
        setRecall(deleteCount-1);
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
                {catData.map((catItem) => (
                  <CategoryItems
                  handleEditCategory={handleEditCategory}
                    handleCategoryDelete={handleCategoryDelete}
                    newkey={++count}
                    cateItem={catItem}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Category;
