import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const CategoryItems = ({ newkey, cateItem, handleCategoryDelete,handleEditCategory }) => {
  
  return (
    <tr>
      <td class="id">{newkey}</td>
      <td>{cateItem.category}</td>
      <td>5</td>
      <td class="edit">
        <button
          className="btn-class"
          onClick={(e) => handleEditCategory(cateItem._id)}
        >
          <FontAwesomeIcon icon={faEdit} />
        </button>
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