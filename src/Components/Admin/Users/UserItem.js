import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const UserItem = ({ user, handleUserEdit, handleuserDelete, id }) => {
  return (
    <tr>
      <td class="id">{id}</td>
      <td>{user.fName + " " + user.lName}</td>
      <td>{user.username}</td>
      <td>{user.role}</td>
      <td class="edit">
      <Link to={`/updateUser/${user._id}`}>
        <button className="btn-class">
          <FontAwesomeIcon icon={faEdit} />
        </button>
        </Link>
      </td>
      <td class="delete">
        <button
          className="btn-class"
          onClick={(e) => handleuserDelete(user._id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
};

export default UserItem;
