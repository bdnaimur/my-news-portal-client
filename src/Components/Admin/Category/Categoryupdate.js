import React, { useState } from "react";

const Categoryupdate = ({ editValue }) => {
console.log(editValue._id);
  const [updateData, setUpdateData] = useState({ category: "News" });

  const hadnleCategoryUpdate = (editValue) => {
    const id = editValue._id;
    console.log(id);
    fetch(`https://intense-fjord-22962.herokuapp.com/updateCategory/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateData),
    })
      .then((result) => {
        if (result) {
          console.log(result);
        }
      });
  };
  const handleBlur = e =>{
    const value= e.target.value;
    setUpdateData(value);
  }

  return (
    <div id="admin-content">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1 class="adin-heading"> Update Category</h1>
          </div>
          <div class="offset-md-3 col-md-6">
            <form onSubmit={(editValue)=>hadnleCategoryUpdate(editValue)}>
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
                  defaultValue={editValue.category}
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
