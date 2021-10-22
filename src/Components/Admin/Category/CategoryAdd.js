import React, { useState } from "react";
import { useHistory } from "react-router";

const CategoryAdd = () => {
    let history = useHistory();
  const [category, setCategory] = useState({
    category: "America",
  });
  const handleCateorySubmit = (e) => {
    e.preventDefault();
    const url = `https://frozen-temple-20129.herokuapp.com/addCategory`;
    fetch(url, {
      method: "POST",
      body: JSON.stringify(category),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((result) =>{ 
          if(result){
              history.push("/category")
          }
          console.log(result);
        });

    e.target.reset();
  };
  const handleCategoryBlur = (e) => {
    const value = e.target.value;
    setCategory({ category: value });
  };
  return (
    <div id="admin-content">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1 class="admin-heading">Add New Category</h1>
          </div>
          <div class="offset-md-3 col-md-6">
            {/* <!-- Form Start --> */}
            <form onSubmit={handleCateorySubmit} autoComplete="off">
              <div class="form-group">
                <label>Category Name</label>
                <input
                  onBlur={handleCategoryBlur}
                  type="text"
                  name="cat"
                  class="form-control"
                  placeholder="Category Name"
                  required
                />
              </div>
              <input
                type="submit"
                name="save"
                class="btn btn-primary"
                value="Save"
                required
              />
            </form>
            {/* <!-- /Form End --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryAdd;
