import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Categoryupdate = () => {
  const {categoryId} = useParams();
  const [updateData, setUpdateData] = useState({ category: "" });
  const [catData, setCatData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:9999/categories/${categoryId}`)
      .then((res) => res.json())
      .then((data) => {
        setCatData(data);
      });
  }, []);

  const hadnleCategoryUpdate = (event) => {
    // const id = editValue._id;
    // console.log(id);
    event.preventDefault();
    fetch(`http://localhost:9999/updateCategory/${categoryId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateData),
    })
    .then(res => res.json())
      .then((result) => {
        if (result.modifiedCount>0) {
          alert("Update Successful")

        }
      });
  };
  const handleBlur = e =>{
    const value= e.target.value;
    setUpdateData({category:value});
  }

  return (
    <div id="admin-content">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1 class="adin-heading"> Update Category</h1>
          </div>
          <div class="offset-md-3 col-md-6">
            <form onSubmit={hadnleCategoryUpdate}>
              <div class="form-group">
                <input
                  type="hidden"
                  name="cat_id"
                  class="form-control"
                  value="1"
                  placeholder=""
                />
              </div>
              <div class="form-group">
                <label>Category Name</label>
                <input
                  onBlur={(e)=>handleBlur(e)}
                  type="text"
                  name="cat_name"
                  class="form-control"
                  defaultValue={catData.category}
                  placeholder=""
                  required
                />
              </div>
              <input
                type="submit"
                name="sumbit"
                class="btn btn-primary"
                value="Update"
                required
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categoryupdate;
