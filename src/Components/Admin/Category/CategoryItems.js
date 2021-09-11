import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const CategoryItems = ({ newkey, cateItem, handleCategoryDelete,handleEditCategory }) => {
  
  return (
    <tr>
      <td class="id">{newkey}</td>
      <td>{cateItem.category}</td>
      <td>5</td>
      <td class="edit">
        <Link to={`/updateCategory/${cateItem._id}`}>
        <button
          className="btn-class"
          
        >
          <FontAwesomeIcon icon={faEdit} />
        </button>
        </Link>
      </td>
      <td class="delete">
        <button
          className="btn-class"
          onClick={(e) => handleCategoryDelete(cateItem._id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
};

export default CategoryItems;
