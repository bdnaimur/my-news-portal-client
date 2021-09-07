import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const UserItem = ({ user, handleUserEdit, handleuserDelete, id }) => {
  return (
    <tr>
      <td class="id">{id}</td>
      <td>{user.fName + " " + user.lName}</td>
      <td>{user.username}</td>
      <td>{user.role}</td>
      <td class="edit">
        <button className="btn-class" onClick={(e) => handleUserEdit(user._id)}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
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
