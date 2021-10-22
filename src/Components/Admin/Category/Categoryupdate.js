import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

const Categoryupdate = () => {
  const { catId } = useParams();
  const history = useHistory();
  const [updateData, setUpdateData] = useState({ category: "" });

  const [catData, setCatData] = useState([]);
  useEffect(() => {
    fetch(`https://frozen-temple-20129.herokuapp.com/categories/${catId}`)
      .then((res) => res.json())
      .then((data) => {
        setCatData(data);
      });
  }, [catId]);

  const hadnleCategoryUpdate = (e) => {
    e.preventDefault();
    fetch(`https://frozen-temple-20129.herokuapp.com/updateCategory/${catId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          console.log(result);
          history.push("/category");
        }
      });
  };
  const handleBlur = (e) => {
    const value = e.target.value;
    setUpdateData({ category: value });
  };

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
                  onBlur={(e) => handleBlur(e)}
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
